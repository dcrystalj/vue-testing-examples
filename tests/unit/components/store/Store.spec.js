import Store from '@/components/store/Store';
import storeFactory from '~/store';
import { wrapperFactory } from '~/wrapper';

describe('Store.vue', () => {
  it('renders fullname', () => {
    let storeOverride = storeFactory.user({
      getters: {
        fullName: () => 'foo',
      },
    });
    const wrapper = wrapperFactory(Store, { storeOverride });

    expect(wrapper.find('span').text()).toBe('foo');
  });

  it('call update function on button click', () => {
    const wrapper = wrapperFactory(Store);
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      'user/updateName',
      'abc'
    );
  });
});
