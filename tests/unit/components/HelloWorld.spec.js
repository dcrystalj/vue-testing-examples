import HelloWorld from '@/components/HelloWorld';
import { shallowMount } from '@vue/test-utils';

describe('HelloWorld', () => {
  test('snapshot test for static component', () => {
    expect(shallowMount(HelloWorld).element).toMatchSnapshot();
  });
});
