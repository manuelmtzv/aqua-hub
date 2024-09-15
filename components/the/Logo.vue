<script setup lang="ts">
type LogoProps = {
  leftClass?: string;
  rightClass?: string;
};

defineProps<LogoProps>();
</script>

<template>
  <NuxtLink to="/" :class="[cn('text-xl font-medium', leftClass)]"
    >Fishkeepers<span :class="[cn('text-xl underline font-medium', rightClass)]"
      >Hub</span
    ></NuxtLink
  >
</template>

<style></style>
