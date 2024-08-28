<script setup lang="ts">
import type { Comment } from "@/types";

type PostCommentsProps = {
  comments: Comment[];
};

defineProps<PostCommentsProps>();
</script>

<template>
  <div v-if="comments.length" class="mt-4">
    <h2 class="text-lg font-semibold">Comentarios</h2>

    <div class="mt-4">
      <div v-for="comment in comments" :key="comment.id" class="flex gap-4">
        <img :src="comment.author.name" class="w-10 h-10 rounded-full" />
        <div>
          <p class="font-semibold">{{ comment.author.name }}</p>
          <p>{{ comment.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
