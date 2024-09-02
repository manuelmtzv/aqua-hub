<script setup lang="ts">
type ButtonProps = {
  class?: string | string[];
};

const props = defineProps<ButtonProps>();
</script>

<template>
  <button
    :class="
      cn(
        'flex items-center gap-2 px-3.5 py-1.5 text-sm border rounded-md bg-white hover:bg-gray-50 dark:bg-dark-800 dark:hover:bg-dark-850 dark:text-white',
        props.class
      )
    "
  >
    <slot></slot>
  </button>
</template>
