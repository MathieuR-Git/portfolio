import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavOpen: false,
  },
  mutations: {
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen;
    },
  },
  actions: {
    setIsNavOpen({ commit }) {
      commit("toggleNav");
    },
  },
  modules: {},
  getters: {
    isNavOpen(state) {
      return state.isNavOpen;
    },
  },
});
