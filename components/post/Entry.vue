<script setup lang="ts">
import type { Post } from "@/types";

type PostEntry = {
  post: Post;
};

const { post } = defineProps<PostEntry>();
</script>

<template>
  <article
    class="flex flex-col gap-4 p-10 border border-gray-200 rounded-md dark:bg-dark-900 dark:border-dark-800 transition-colors duration-200"
  >
    <PostHeader :post="post" />

    <PostContent :post="post" />

    <PostComments :comments="post.comments" />
  </article>
</template>
