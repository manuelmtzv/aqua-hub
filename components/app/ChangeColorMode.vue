<script setup lang="ts">
const colorMode = useColorMode();

console.log(colorMode.preference);
</script>

<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<style></style>
