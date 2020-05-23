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

// 게시물을 한개 생성하는 API
const createPost = postData => {
  return instance.post('posts', postData);
};

export { registerUser, loginUser, fetchPosts, createPost };
