<script setup lang="ts">
const { isSidebarOpen } = useLayoutState();
</script>

<template>
  <aside
    :class="[
      'sidebar min-h-[100svh] max-h-[100svh] px-5 py-6 border-r flex flex-col gap-5 overflow-hidden top-0 z-10 sticky dark:border-dark-500',
      isSidebarOpen ? 'min-w-[17rem]' : 'min-w-[0px]',
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
