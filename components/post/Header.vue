<script setup lang="ts">
import moment from "moment";
import type { Post } from "@/types";

type PostHeaderProps = {
  post: Post;
};

const { post } = defineProps<PostHeaderProps>();
const postTime = moment(post.createdAt).format("LLL");
</script>

<template>
  <div class="flex justify-between items-center gap-2">
    <div class="flex">
      <!-- <img
          :src="post.author.avatar"
          alt="avatar"
          class="w-12 h-12 rounded-full"
        /> -->

      <div class="flex flex-col gap-1.5">
        <h3 class="text-sm font-medium">
          {{ `${post.author.name} ${post.author.lastname}` }}
        </h3>

        <span class="text-xs">{{ postTime }}</span>
      </div>
    </div>

    <Icon name="mdi:dots-vertical" class="text-3xl" />
  </div>
</template>
