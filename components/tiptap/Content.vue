<script setup lang="ts">
type TiptapContentProps = {
  title?: string;
  content: string;
};

defineProps<TiptapContentProps>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 v-if="title" class="font-medium text-lg">{{ title }}</h1>

    <div class="tiptap tiptap-content" v-html="content"></div>
  </div>
</template>

<style lang="postcss">
.tiptap-content {
  br {
    display: block;
    margin: 0.75rem 0;
    content: "";
  }
}
</style>
