<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4 overflow-y-scroll no-scrollbar">
    <div class="flex items-center justify-between">
      <h1>Feed</h1>
      <button>Add post</button>
    </div>

    <PostList />
  </div>
</template>
