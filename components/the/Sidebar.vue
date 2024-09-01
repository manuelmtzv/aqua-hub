<script setup lang="ts">
const { isSidebarOpen } = useLayoutState();
</script>

<template>
  <aside
    :class="[
      'sidebar min-h-[100svh] max-h-[100svh] px-5 py-6 border-r flex flex-col gap-5 overflow-hidden top-0 bg-white dark:bg-dark-900 z-10 sticky transition-colors duration-200 dark:border-dark-500',
      isSidebarOpen ? 'min-w-[300px]' : 'min-w-[0px]',
    ]"
    ref="sidebarRef"
  >
    <TheSidebarHeader />

    <hr />

    <AppSearchBar />

    <TheSidebarLinks />

    <TheSidebarHelpers />
  </aside>
</template>
