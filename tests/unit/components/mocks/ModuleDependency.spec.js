import { shallowMount } from "@vue/test-utils";
import ModuleDependency from "@/components/mocks/ModuleDependency";
import axios from "axios";
import flushPromises from "flush-promises";

jest.mock("axios");

describe("ModuleDependency.vue", () => {
  it("mocks module", async () => {
    expect.assertions(2);
    const response = "response text";
    axios.post.mockImplementation(() => Promise.resolve(response));
    const wrapper = shallowMount(ModuleDependency);
    await flushPromises();

    expect(axios.post).toHaveBeenCalledWith("/abcd");
    expect(wrapper.text()).toBe(response);
  });
});
