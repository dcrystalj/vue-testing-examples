import { shallowMount } from '@vue/test-utils';
import { logHelloOnCreateMixin } from '@/mixins/mixins';

describe('Timer.vue', () => {
  it('renders correct date', () => {
    jest.spyOn(console, 'log');
    const Component = {
      render() {},
      mixins: [logHelloOnCreateMixin],
    };

    shallowMount(Component);

    expect(console.log).toBeCalledWith('hello');
  });
});
