<script setup lang="ts">
const { isSidebarOpen } = useLayoutState();

type SidebarHelpersProps = {
  class?: string;
};

defineProps<SidebarHelpersProps>();
</script>

<template>
  <div
    :class="
      cn(
        'mt-auto flex justify-between gap-2 items-center',
        $props.class,
        !isSidebarOpen && 'flex-col gap-4'
      )
    "
  >
    <AppThemeToggle />

    <AppLocaleSelect minimal />
  </div>
</template>
