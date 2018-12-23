import { shallowMount } from "@vue/test-utils";
import EventsElement from "@/components/events/EventsElement";
import { Button } from "element-ui";

describe("EventsElement.vue", () => {
  it("1. emits onEmittedEvent event on emitted click", () => {
    const mock = jest.fn();
    const wrapper = shallowMount(EventsElement, {
      propsData: {
        callPropFn: mock
      }
    });

    wrapper.find(Button).vm.$emit("click");

    expect(wrapper.emitted().onEmittedEvent).toStrictEqual([[1]]);
    expect(mock).toHaveBeenCalledWith(2);
  });
  it("2. emits onEmittedEvent event on triggered click", () => {
    const mock = jest.fn();
    const wrapper = shallowMount(EventsElement, {
      propsData: {
        callPropFn: mock
      },
      stubs: {
        Button: Button
      }
    });

    wrapper.find(Button).trigger("click");

    expect(wrapper.emitted().onEmittedEvent).toStrictEqual([[1]]);
    expect(mock).toHaveBeenCalledWith(2);
  });
});
