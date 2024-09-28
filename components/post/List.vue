<script setup lang="ts">
import { postRepository } from "@/repository";

const { data } = await useAsyncData("posts", postRepository().getPosts);
const localePath = useLocalePath();
</script>

<template>
  <template v-if="data">
    <PostItem
      v-for="post in data.data"
      :key="post.id"
      :post="post"
      :to="localePath(`/app/feed/posts/${post.id}`)"
    />

    <PlusModalPage name="modal" />
  </template>
</template>
