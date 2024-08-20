<script setup lang="ts">
import type { Post, ListResponse } from "@/types";

const runtimeConfig = useRuntimeConfig();

const { data } = await useFetch<ListResponse<Post>>(
  runtimeConfig.public.API_BASE_URL + "/posts"
);
</script>

<template>
  <FeedPostEntry v-for="post in data.data" :key="post.id" :post="post" />
</template>
