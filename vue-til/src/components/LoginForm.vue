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
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const { data } = await loginUser({
          username: this.username,
          password: this.password,
        });
        this.logMessage = `${data.user.username} 님이 로그인 되었습니다`;
      } catch (error) {
        // console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
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
