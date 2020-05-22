<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="post in posts"
          :key="post._id"
          :postItem="post"
        ></PostListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/index';

export default {
  data() {
    return {
      posts: [],
      logMessage: '',
      isLoading: false,
    };
  },
  methods: {
    async getPosts() {
      this.isLoading = true;
      try {
        const { data } = await fetchPosts();
        this.posts = data.posts;
        console.log(this.posts);
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
  created() {
    this.getPosts();
  },
};
</script>

<style></style>
