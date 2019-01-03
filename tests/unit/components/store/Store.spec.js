import Store from '@/components/store/Store';
import storeFactory from '~/store';
import { ComponentWrapper } from '~/wrapper';

describe('Store.vue', () => {
  const StoreWrapper = overrides => new ComponentWrapper(Store, overrides);

  it('renders fullname', () => {
    let storeOverride = storeFactory.user({
      getters: {
        fullName: () => 'foo',
      },
    });

    const [wrapper] = StoreWrapper({ storeOverride });
    expect(wrapper.find('span').text()).toBe('foo');
  });

  it('call update function on button click', () => {
    const [wrapper, defaults] = StoreWrapper();
    wrapper.find('button').trigger('click');

    expect(defaults.store.dispatch).toHaveBeenCalledWith(
      'user/updateName',
      'abc'
    );
  });
});
