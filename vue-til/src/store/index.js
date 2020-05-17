import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
  getters: {
    getUsername(state) {
      console.log(state.username);

      return state.username;
    },
    isUserLogin(state) {
      console.log(state.username);

      return state.username ? true : false;
    },
  },
});
