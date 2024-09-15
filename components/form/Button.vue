<script setup lang="ts">
type FormButtonProps = {
  class?: string;
  disabled?: boolean;
};

defineProps<FormButtonProps>();
</script>

<template>
  <button
    :class="
      cn(
        'inline-block px-4 py-2 rounded-md shadow-sm transition-colors duration-200',
        $props.class
      )
    "
    type="submit"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
