<script setup lang="ts">
import type { Post } from "@/types";

type PostDetails = {
  post: Post;
};

// defineProps<PostDetails>();

const route = useRoute();
</script>

<template>
  <div>
    <h2>Hola</h2>
  </div>
</template>
