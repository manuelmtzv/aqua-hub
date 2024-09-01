<script setup lang="ts">
import type { Post } from "@/types";

const dayjs = useDayjs();

type PostHeaderProps = {
  post: Post;
};

const { post } = defineProps<PostHeaderProps>();
const postTime = dayjs(post.createdAt).format("LLL");
</script>

<template>
  <div class="flex justify-between items-center gap-2">
    <div class="flex">
      <div class="flex flex-col gap-1">
        <h3 class="font-medium">
          {{ `${post.author.name} ${post.author.lastname}` }}
        </h3>

        <span class="text-xs dark:text-gray-300">{{ postTime }}</span>
      </div>
    </div>

    <Icon name="mdi:dots-vertical" class="text-3xl" />
  </div>
</template>
