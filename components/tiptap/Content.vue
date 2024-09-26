<script setup lang="ts">
type TiptapContentProps = {
  content: string;
  title?: string;
  class?: string;
  contentClass?: string;
};

defineProps<TiptapContentProps>();
</script>

<template>
  <div :class="cn('flex flex-col gap-2', $props.class)">
    <h1 v-if="title" class="font-medium text-lg">{{ title }}</h1>

    <div
      :class="cn('tiptap tiptap-content', contentClass)"
      v-html="content"
    ></div>
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
