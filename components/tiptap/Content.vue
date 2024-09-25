<script setup lang="ts">
type TiptapContentProps = {
  title: string;
  content: string;
};

defineProps<TiptapContentProps>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-medium text-lg">{{ title }}</h1>

    <div class="tiptap" v-html="content"></div>
  </div>
</template>
