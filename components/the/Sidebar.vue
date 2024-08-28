<script setup lang="ts">
const { isSidebarOpen } = useLayoutState();
</script>

<template>
  <aside
    :class="[
      'sidebar min-h-[100svh] h-fit max-h-[100svh] px-5 py-6 border-r flex flex-col gap-5 overflow-hidden',
      isSidebarOpen ? 'min-w-[300px]' : 'min-w-[0px]',
    ]"
  >
    <TheSidebarHeader />
    <hr />
    <AppSearchBar />

    <TheSidebarLinks />
  </aside>
</template>
