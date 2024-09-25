<script setup lang="ts">
import type { Post } from "@/types";

type PostContentProps = {
  post: Post;
};

const props = defineProps<PostContentProps>();

const haveComments = props.post.comments.length > 0;
</script>

<template>
  <div class="flex flex-col gap-4">
    <TiptapContent :content="post.content" :title="post.title" />

    <nav
      :class="[
        'flex items-center justify-between gap-2',
        haveComments && 'pb-3 border-b',
      ]"
    >
      <div class="flex items-center gap-4">
        <button class="post-action">
          <Icon name="mdi:heart" class="text-xl" />
          {{ $t("post.postReact") }}
        </button>

        <button class="post-action">
          <Icon name="mdi:comment" class="text-xl" />
          {{ $t("post.postComment") }}
        </button>
      </div>

      <Icon name="mdi:share-variant" class="text-2xl" />
    </nav>
  </div>
</template>

<style scoped>
.post-action {
  @apply flex items-center gap-2 text-sm dark:text-gray-300 dark:hover:text-gray-100;
}
</style>
