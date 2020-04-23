<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input type="text" name="username" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input type="text" name="password" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const { data } = await loginUser({
          username: this.username,
          password: this.password,
        });
        this.logMessage = `${data.user.username} 님이 로그인 되었습니다`;
        this.initForm();
      } catch (error) {
        console.log(error.response.data);
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
