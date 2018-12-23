import { shallowMount } from "@vue/test-utils";
import Router from "@/components/router/Router";

// remember: $route and $router properties are read-only

describe("Router.vue", () => {
  it("renders correct url parameter", () => {
    const wrapper = shallowMount(Router, {
      mocks: {
        $route: {
          params: {
            id: 1
          }
        }
      }
    });

    expect(wrapper.find("span").text()).toStrictEqual("1");
  });
  it("redirect on click", () => {
    let replaceMock = jest.fn();
    const wrapper = shallowMount(Router, {
      mocks: {
        $route: {
          params: {
            id: 1
          }
        },
        $router: {
          replace: replaceMock
        }
      }
    });
    wrapper.find("button").trigger("click");

    expect(replaceMock).toHaveBeenCalledWith("/about");
  });
});
