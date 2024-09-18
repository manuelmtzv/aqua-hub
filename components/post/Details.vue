<script setup lang="ts">
import { postRepository } from "@/repository";
import { post } from "~/i18n/languages/es/post";

type PostDetailsProps = {
  id: string;
};

const { id } = defineProps<PostDetailsProps>();

const { data, status } = await useLazyAsyncData(`post:${id}`, () =>
  postRepository().getPost(id as string)
);
</script>

<template>
  <template v-if="status == 'pending'">
    <div class="flex items-center justify-center h-72">
      <AnimationLoadingSpin when />
    </div>
  </template>

  <div v-else-if="data">
    <div class="flex flex-col gap-5">
      <PostHeader :post="data" />

      <PostContent :post="data" />

      <PostComments :comments="data.comments" />

      <TiptapEditor />
    </div>
  </div>
</template>
