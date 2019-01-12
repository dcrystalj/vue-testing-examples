import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { merge } from 'lodash';

import storeFactory from '~/store';
import { uppercase } from '@/filters/filters';

export function wrapperFactory(Component, overrides = null) {
  const localVue = createLocalVue();

  localVue.use(Vuex);
  localVue.use(VueRouter);
  localVue.use(ElementUI);
  localVue.filter('uppercase', uppercase);

  const storeOverride = (overrides && overrides.storeOverride) || {};
  const router = new VueRouter();
  const defaults = merge(
    {
      localVue,
      router,
      store: storeFactory.createStore(
        merge(storeFactory.user(), storeOverride)
      ),
    },
    overrides
  );
  return shallowMount(Component, defaults);
}
