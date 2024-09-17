<script setup lang="ts">
import { postRepository } from "@/repository";

const { data } = await useAsyncData("posts", postRepository().getPosts);
const localePath = useLocalePath();
</script>

<template>
  <template v-if="data">
    <PostEntry
      v-for="post in data.data"
      :key="post.id"
      :post="post"
      :to="localePath(`/app/feed/posts/${post.id}`)"
    />

    <PlusModalPage name="posts" />
  </template>
</template>
