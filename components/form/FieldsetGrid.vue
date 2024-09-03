<script setup lang="ts">
type FormFieldsetGridProps = {
  class?: string;
};

defineProps<FormFieldsetGridProps>();
</script>

<template>
  <fieldset :class="cn('grid grid-cols-1 sm:grid-cols-2 gap-2', $props.class)">
    <slot />
  </fieldset>
</template>
