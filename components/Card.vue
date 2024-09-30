<script setup lang="ts">
type CardProps = {
  class?: string;
};

defineProps<CardProps>();
</script>

<template>
  <div :class="cn('p-4 bg-white dark:bg-dark-800 rounded-md', $props.class)">
    <slot />
  </div>
</template>
