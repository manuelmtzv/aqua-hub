<script setup lang="ts">
import { postRepository } from "@/repository";

const postRepo = postRepository();

const { data } = await postRepo.getPosts();
</script>

<template>
  <template v-if="data">
    <PostEntry v-for="post in data" :key="post.id" :post="post" />
  </template>
</template>
