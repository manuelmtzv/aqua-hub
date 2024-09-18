<script setup lang="ts">
import { postRepository } from "@/repository";

type PostDetailsProps = {
  id: string;
};

const { id } = defineProps<PostDetailsProps>();

const { data } = await useLazyAsyncData(`post:${id}`, () =>
  postRepository().getPost(id as string)
);
</script>

<template>
  <pre>{{ data }}</pre>
</template>
