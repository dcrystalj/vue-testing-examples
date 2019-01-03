import { shallowMount } from '@vue/test-utils';
import Input from '@/components/forms/Input';

describe('Input.vue', () => {
  it('emits written text on click', () => {
    const wrapper = shallowMount(Input);

    wrapper.find('input').setValue('super-value');
    wrapper.find('button').trigger('click');

    expect(wrapper.emitted().submitted).toStrictEqual([['super-value']]);
  });
  it('or emits written text on click', () => {
    const wrapper = shallowMount(Input);

    wrapper.find('input').element.value = 'super-value';
    wrapper.find('input').trigger('input');

    wrapper.find('button').trigger('click');

    expect(wrapper.emitted().submitted).toStrictEqual([['super-value']]);
  });
});
