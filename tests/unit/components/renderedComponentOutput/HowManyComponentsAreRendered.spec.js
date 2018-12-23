import { shallowMount } from "@vue/test-utils";
import HowManyComponentsAreRendered from "@/components/renderedComponentOutput/HowManyComponentsAreRendered";
import TextContent from "@/components/renderedComponentOutput/TextContent";

describe("HowManyComponentsAreRendered.vue", () => {
  it("renderd 3 components", () => {
    const wrapper = shallowMount(HowManyComponentsAreRendered, {
      propsData: {
        numberOfRenderedComponents: 3
      }
    });

    expect(wrapper.findAll(TextContent).length).toBe(3);
  });
});
