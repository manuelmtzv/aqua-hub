<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import { useWindowSize } from "@vueuse/core";
import type { Post } from "@/types";

type PostItemProps = {
  post: Post;
  to?: NuxtLinkProps["to"];
};

const { post } = defineProps<PostItemProps>();
const { width } = useWindowSize();

const textLimit = computed(() => (width.value < 768 ? 350 : 850));
</script>

<template>
  <div>
    <PlusModalLink
      :to="to"
      class="flex flex-col gap-4 p-10 py-8 border border-gray-200 rounded-md dark:bg-dark-900 dark:border-dark-800 hover:border-gray-300 hover:shadow-sm hover:bg-gray-50"
    >
      <PostHeader :post="post" />

      <PostContent :post="post" :text-limit="textLimit" />

      <PostComments :comments="post.comments" />
    </PlusModalLink>
  </div>
</template>
