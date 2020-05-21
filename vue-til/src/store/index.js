import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    token: '',
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  getters: {
    getUsername(state) {
      return state.username;
    },
    isUserLogin(state) {
      return state.username ? true : false;
    },
  },
});
