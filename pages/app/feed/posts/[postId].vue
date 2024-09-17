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
    <Dialog is-open :close-dialog="() => {}">
      <template #body> <h2>Hola</h2> </template>
    </Dialog>
  </div>
</template>
