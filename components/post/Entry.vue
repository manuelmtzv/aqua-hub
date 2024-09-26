<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import type { Post } from "@/types";

type PostEntry = {
  post: Post;
  to?: NuxtLinkProps["to"];
};

const { post } = defineProps<PostEntry>();
</script>

<template>
  <div>
    <PlusModalLink
      :to="to"
      class="flex flex-col gap-4 p-10 py-8 border border-gray-200 rounded-md dark:bg-dark-900 dark:border-dark-800"
    >
      <PostHeader :post="post" />

      <PostContent :post="post" />

      <PostComments :comments="post.comments" />
    </PlusModalLink>
  </div>
</template>
