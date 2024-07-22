<script setup lang="ts">
type FormLabelProps = {
  label: string;
  error?: MaybeRef<string>;
};

defineProps<FormLabelProps>();
</script>

<template>
  <div>
    <label for="">{{ label }}</label>

    <slot />

    <span v-if="error">{{ error }}</span>
  </div>
</template>
