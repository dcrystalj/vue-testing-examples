import { shallowMount } from '@vue/test-utils';
import Classes from '@/components/renderedComponentOutput/Classes';

describe('Classes.vue', () => {
  it.each([
    [0, ['classes__title']],
    [1, ['classes__title', 'classes__title--primary']],
    [2, ['classes__title', 'classes__title--warning']],
  ])('has correct class', (inputNumber, expectedClasses) => {
    const wrapper = shallowMount(Classes, {
      propsData: {
        inputNumber,
      },
    });
    expect(wrapper.find('.classes__title').classes()).toEqual(expectedClasses);
  });
});
