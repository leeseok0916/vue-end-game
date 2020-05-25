import axios from 'axios';
import { setInterceptor } from './common/interceptor';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 액시오스 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptor(instance);
}

const instance = createInstance();
const posts = createInstanceWithAuth('posts');

export { instance, posts };
