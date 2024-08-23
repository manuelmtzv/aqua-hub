<script setup lang="ts">
const { isSidebarOpen } = useLayoutState();
</script>

<template>
  <button
    :class="[
      'flex gap-2 bg-gray-100 rounded-lg h-[2.375rem] items-center',
      isSidebarOpen ? 'p-2' : 'p-1 justify-center',
    ]"
  >
    <Icon name="mdi:magnify" class="text-xl" />
    <span v-if="isSidebarOpen" class="text-sm"> Buscar... </span>
  </button>
</template>
