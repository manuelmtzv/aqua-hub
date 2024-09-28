<script setup lang="ts">
import type { Post } from "@/types";
import { useWindowSize } from "@vueuse/core";

type PostContentProps = {
  post: Post;
  textLimit?: number;
  showTiptapContent?: boolean;
};

const props = withDefaults(defineProps<PostContentProps>(), {
  textLimit: 850,
  showTiptapContent: false,
});
const haveComments = props.post.comments.length > 0;

const textLimit = computed(() => props.textLimit);

const plainTextContent = computed(() => {
  const text = getHtmlText(props.post.content).trim();

  if (text.length > textLimit.value) {
    return text.slice(0, textLimit.value) + "...";
  }

  return text;
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <TiptapContent
      v-if="showTiptapContent"
      :content="post.content"
      :title="post.title"
    />

    <p v-else>{{ plainTextContent }}</p>

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
