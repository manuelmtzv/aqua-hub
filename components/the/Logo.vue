<script setup lang="ts">
type LogoProps = {
  leftClass?: string;
  rightClass?: string;
};

defineProps<LogoProps>();
</script>

<template>
  <span :class="[cn('text-xl font-medium', leftClass)]"
    >Fishkeepers<span :class="[cn('text-xl underline font-medium', rightClass)]"
      >Hub</span
    ></span
  >
</template>

<style></style>
