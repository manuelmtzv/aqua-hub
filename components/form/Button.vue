<script setup lang="ts">
type FormButtonProps = {
  class?: string;
  disabled?: boolean;
};

defineProps<FormButtonProps>();
</script>

<template>
  <button
    :class="cn('button', $props.class)"
    type="submit"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
