<script setup lang="ts">
const { isSidebarOpen, toggleSidebar } = useLayoutState();
</script>

<template>
  <div class="flex items-center justify-between h-8">
    <TheLogo v-if="isSidebarOpen" />

    <Button
      v-if="isSidebarOpen"
      class="flex border rounded-md p-1"
      @click="toggleSidebar"
    >
      <Icon name="mdi:chevron-double-left" class="text-2xl my-auto" />
    </Button>

    <Button v-else class="flex border rounded-md p-1" @click="toggleSidebar">
      <Icon name="mdi:chevron-double-right" class="text-2xl" />
    </Button>
  </div>
</template>
