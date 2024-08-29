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
        'flex items-center gap-2 px-3.5 py-1.5 text-sm border rounded-md bg-white transition-colors duration-200 hover:bg-gray-50',
        props.class
      )
    "
  >
    <slot></slot>
  </button>
</template>
