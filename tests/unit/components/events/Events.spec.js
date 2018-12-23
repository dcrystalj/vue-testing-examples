import { shallowMount } from "@vue/test-utils";
import Events from "@/components/events/Events";

describe("Events.vue", () => {
  it("emits onEmittedEvent event on click", () => {
    const mock = jest.fn();
    const wrapper = shallowMount(Events, {
      propsData: {
        callPropFn: mock
      }
    });

    wrapper.find("button").trigger("click");

    expect(wrapper.emitted().onEmittedEvent).toStrictEqual([[1]]);
    expect(mock).toHaveBeenCalledWith(2);
  });
});
