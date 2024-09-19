<script setup lang="ts">
type TiptapButtonWrapperProps = {
  isActive: boolean;
};

defineProps<TiptapButtonWrapperProps>();
</script>

<template>
  <button
    :class="
      cn(
        'p-1 flex text-gray-600 border border-transparent dark:text-gray-400 rounded-sm transition-all hover:border-gray-100',
        isActive && 'text-gray-900 bg-gray-50 border-gray-200'
      )
    "
  >
    <slot />
  </button>
</template>
