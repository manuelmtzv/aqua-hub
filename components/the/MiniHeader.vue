<script setup lang="ts">
const { isSidebarOpen, toggleSidebar } = useLayoutState();
const { user } = useAuthState();
</script>

<template>
  <div class="py-6 flex justify-between items-center min-h-20">
    <TheLogo v-if="!isSidebarOpen" />

    <div class="flex items-center gap-2">
      <p v-if="user" class="ml-auto">{{ `${user.name} ${user.lastname}` }}</p>

      <AppChangeColorMode />
    </div>
  </div>
</template>
