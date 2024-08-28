<script setup lang="ts">
import moment from "moment";
import type { Post } from "@/types";

type PostEntry = {
  post: Post;
};

const { post } = defineProps<PostEntry>();
const postTime = moment(post.createdAt).format("LLL");
</script>

<template>
  <article class="p-10 border border-gray-100">
    <div class="flex justify-between gap-2">
      <div class="flex">
        <!-- <img
          :src="post.author.avatar"
          alt="avatar"
          class="w-12 h-12 rounded-full"
        /> -->

        <div class="flex flex-col gap-2">
          <h3>{{ `${post.author.name} ${post.author.lastname}` }}</h3>

          <span>{{ postTime }}</span>
        </div>
      </div>

      <Icon name="mdi:dots-vertical" class="text-xl" />
    </div>
  </article>
</template>
