<script setup lang="ts">
const { isSidebarOpen, toggleSidebar } = useLayoutState();
const { user } = useAuthState();
</script>

<template>
  <div class="py-6 flex justify-between items-center">
    <div
      :class="[isSidebarOpen && 'invisible']"
      class="flex items-center gap-4"
    >
      <TheLogo />

      <button class="flex border rounded-md" @click="toggleSidebar">
        <Icon name="mdi:chevron-double-right" class="text-2xl" />
      </button>
    </div>

    <p v-if="user">{{ `${user.name} ${user.lastname}` }}</p>
  </div>
</template>
