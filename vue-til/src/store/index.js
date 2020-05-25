import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';
import { createPost } from '@/api/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
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
  actions: {
    // 로그인
    async LOGIN_USER({ commit }, loginUserData) {
      const { data } = await loginUser(loginUserData);
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
    },
    // eslint-disable-next-line no-unused-vars
    async CREATE_POST({ commit }, postData) {
      const { data } = await createPost(postData);
      return data;
    },
  },
});
