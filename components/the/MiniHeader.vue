<script setup lang="ts">
const { isSidebarOpen, toggleSidebar } = useLayoutState();
const { user } = useAuthState();
</script>

<template>
  <div class="py-6 flex justify-between items-center">
    <p v-if="user" class="ml-auto">{{ `${user.name} ${user.lastname}` }}</p>
  </div>
</template>
