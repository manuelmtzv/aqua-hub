<script setup lang="ts">
type FormLabelProps = {
  label?: string;
  error?: MaybeRef<string>;
  class?: string;
  errorClass?: string;
};

defineProps<FormLabelProps>();
</script>

<template>
  <div :class="cn('flex flex-col gap-1', $props.class)">
    <label v-if="label">{{ label }}</label>

    <slot />

    <span :class="cn('text-red-300 text-sm', $props.errorClass)" v-if="error">{{
      error
    }}</span>
  </div>
</template>
