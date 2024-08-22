<script setup lang="ts">
import type { Post } from "@/types";

type PostEntry = {
  post: Post;
};

defineProps<PostEntry>();
</script>

<template>
  <article class="p-10 border border-gray-100">
    <!-- <pre>{{ post }}</pre> -->
  </article>
</template>
