<script setup lang="ts">
type FormButtonProps = {
  class?: string;
};

defineProps<FormButtonProps>();
</script>

<template>
  <button :class="cn('button', $props.class)" type="submit">
    <slot />
  </button>
</template>
