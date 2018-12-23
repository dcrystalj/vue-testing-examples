import { shallowMount } from "@vue/test-utils";
import Store from "@/components/store/Store";
import storeFactory from "~/store";
import flushPromises from "flush-promises";
import { ComponentWrapper } from "~/wrapper";

describe("Store.vue", () => {
  const StoreWrapper = overrides => new ComponentWrapper(Store, overrides);

  it("renders fullName", () => {
    const [wrapper, defaults] = StoreWrapper();
    expect(wrapper.find("span").text()).toBe(
      defaults.store.getters["user/fullName"]
    );
  });
  it("mock fullName and renders it", () => {
    let storeOverride = storeFactory.user({
      getters: {
        fullName: () => "foo"
      }
    });

    const [wrapper, defaults] = StoreWrapper({ storeOverride });
    expect(wrapper.find("span").text()).toBe("foo");
  });

  it("call update function on button click", () => {
    const [wrapper, defaults] = StoreWrapper();
    wrapper.find("button").trigger("click");

    expect(defaults.store.dispatch).toHaveBeenCalledWith(
      "user/updateName",
      "abc"
    );
  });
});
