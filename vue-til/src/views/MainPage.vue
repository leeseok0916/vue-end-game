<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <li v-for="post in posts" :key="post._id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';

export default {
  data() {
    return {
      posts: [],
      logMessage: '',
    };
  },
  methods: {
    async getPosts() {
      try {
        const { data } = await fetchPosts();
        this.posts = data.posts;
      } catch (error) {
        this.logMessage = error.response.data;
      }
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style></style>
