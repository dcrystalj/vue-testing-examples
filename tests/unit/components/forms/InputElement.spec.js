import { shallowMount } from '@vue/test-utils';
import InputElement from '@/components/forms/InputElement';
import { Input } from 'element-ui';

describe('InputElement.vue', () => {
  it('emits onEmittedEvent event on click', () => {
    const wrapper = shallowMount(InputElement);

    // wrapper.find(Input).setValue("super-value"); // not possible
    wrapper.find(Input).vm.$emit('input', 'super-value');
    wrapper.find('button').trigger('click');

    expect(wrapper.emitted().submitted).toStrictEqual([['super-value']]);
  });
  it('or emits onEmittedEvent event on click', () => {
    const wrapper = shallowMount(InputElement, {
      stubs: {
        Input,
      },
    });

    wrapper
      .find(Input)
      .find('input')
      .setValue('super-value');
    wrapper.find('button').trigger('click');

    expect(wrapper.emitted().submitted).toStrictEqual([['super-value']]);
  });
});
