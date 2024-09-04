<script setup lang="ts">
import { postRepository } from "@/repository/post.repository";
const { $api } = useNuxtApp();

const postRepo = postRepository($api);

const { data } = await useAsyncData(() => postRepo.getPosts());
</script>

<template>
  <template v-if="data">
    <PostEntry v-for="post in data.data" :key="post.id" :post="post" />
  </template>
</template>
