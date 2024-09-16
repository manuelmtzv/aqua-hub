<script setup lang="ts">
import { postRepository } from "@/repository";

const { data } = await useAsyncData("posts", postRepository().getPosts);
</script>

<template>
  <template v-if="data">
    <PostEntry v-for="post in data.data" :key="post.id" :post="post" />
  </template>
</template>
