<script setup lang="ts">
import type { Post } from "@/types";

type PostContentProps = {
  post: Post;
};

const props = defineProps<PostContentProps>();

const haveComments = props.post.comments.length > 0;
</script>

<template>
  <div>
    <p class="text-xs font-medium">{{ post.content }}</p>

    <nav
      :class="[
        'flex items-center justify-between gap-2 mt-4',
        haveComments && 'pb-3 border-b',
      ]"
    >
      <div class="flex items-center gap-4">
        <button class="post-action">
          <Icon name="mdi:heart" class="text-xl" />
          Reaccionar
        </button>

        <button class="post-action">
          <Icon name="mdi:comment" class="text-xl" />
          Comentar
        </button>
      </div>

      <Icon name="mdi:share-variant" class="text-2xl" />
    </nav>
  </div>
</template>

<style scoped>
.post-action {
  @apply flex items-center gap-2 text-sm;
}
</style>
