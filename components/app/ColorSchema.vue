<script setup lang="ts">
const $colorMode = useColorMode();
</script>

<template>
  <div>
    <select v-model="$colorMode.preference" class="input">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
