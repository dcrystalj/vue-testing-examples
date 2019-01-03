import { shallowMount } from '@vue/test-utils';
import RadioButtons from '@/components/forms/RadioButtons';

describe('RadioButtons.vue', () => {
  it('emits selected color on click', () => {
    const wrapper = shallowMount(RadioButtons);

    wrapper
      .findAll("input[type='radio']")
      .at(1)
      .setChecked();
    wrapper.find('button').trigger('click');

    expect(wrapper.emitted().submitted).toStrictEqual([['1']]);
  });
});
