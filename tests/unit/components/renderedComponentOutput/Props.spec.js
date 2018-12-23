import { shallowMount } from "@vue/test-utils";
import Props from "@/components/renderedComponentOutput/Props";

describe("Props.vue", () => {
  it("renders correct text", () => {
    const wrapper = shallowMount(Props, {
      propsData: {
        inputString: "input",
        inputNumber: 1
      }
    });
    expect(wrapper.find("h1").text()).toStrictEqual("input 1");
  });
});
