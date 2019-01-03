import { merge } from 'lodash';
import Vuex from 'vuex';

const createStore = modules => {
  const store = new Vuex.Store({
    modules,
  });
  store.dispatch = jest.fn(() => Promise.resolve());
  return store;
};

function user(overrides) {
  const defaults = {
    state: {},
    actions: {
      init: jest.fn(() => Promise.resolve()),
      update: jest.fn(() => Promise.resolve()),
    },
    getters: {
      fullName: () =>
        Math.random()
          .toString(36)
          .substring(2, 15),
    },
  };
  return {
    user: {
      namespaced: true,
      ...merge(defaults, overrides),
    },
  };
}

export default {
  user,
  createStore,
};
