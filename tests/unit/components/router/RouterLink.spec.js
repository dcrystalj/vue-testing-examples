import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import RouterLink from "@/components/router/RouterLink";
import flushPromises from "flush-promises";

describe("RouterLink.vue", () => {
  it.each([["home", "link to home"], ["about", "about"]])(
    "renders correct url parameter",
    (linkName, renderedText) => {
      const wrapper = shallowMount(RouterLink, {
        propsData: {
          name: linkName
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      });

      expect(wrapper.find(RouterLinkStub).props().to).toStrictEqual({
        name: linkName
      });
      expect(wrapper.find(RouterLinkStub).text()).toBe(renderedText);
    }
  );
});
