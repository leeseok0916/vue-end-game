import axios from 'axios';
import { setInterceptor } from './common/interceptor';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptor(instance);
}

const instance = createInstance();

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(loginData) {
  return instance.post('login', loginData);
}

function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
