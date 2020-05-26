<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      logMessage: '',
    };
  },
  methods: {
    async deleteItem() {
      if (confirm('삭제할래?')) {
        try {
          await deletePost(this.postItem._id);
          this.$emit('refresh'); // 부모 컴포넌트의 method 호출할 수 있는 방법
        } catch (error) {
          this.logMessage = error.response.data.message;
        }
      }
    },
    routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>

<style></style>
