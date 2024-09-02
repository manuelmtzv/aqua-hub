<script setup lang="ts">
const value = defineModel<string>({ required: true });
</script>

<template>
  <textarea v-model="value" class="input" />
</template>
