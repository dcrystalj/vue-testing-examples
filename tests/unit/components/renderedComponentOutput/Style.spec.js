import { shallowMount } from "@vue/test-utils";
import Style from "@/components/renderedComponentOutput/Style";

describe("Style.vue", () => {
  it.each([[250, "rgb(250, 255, 255)"], [0, "rgb(0, 255, 255)"]])(
    "has correct redness",
    (redness, expected) => {
      const wrapper = shallowMount(Style, {
        propsData: {
          redness
        }
      });

      expect(wrapper.find(".style").element.style.color).toBe(expected);
    }
  );
});
