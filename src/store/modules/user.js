import axios from "axios";

export default {
  namespaced: true,
  state: { name: "", lastName: "", loading: false },
  mutations: {
    SET_NAME(state, { name, lastName }) {
      state.name = name;
      state.lastName = lastName;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    }
  },
  getters: {
    fullName(state) {
      return `${state.name} ${state.lastName}`;
    }
  },
  actions: {
    init({ commit }, user) {
      commit("SET_NAME", user);
    },
    updateName({ commit, state }, name) {
      commit("SET_LOADING", true);
      axios.post("user/", { name }).finally(() => {
        commit("SET_LOADING", false);
      });
      commit("SET_NAME", { name, lastName: state.lastName });
    }
  }
};
