<script setup lang="ts">
import { useElementSize } from "@vueuse/core";

const sidebarRef = ref<HTMLElement | null>(null);

const dimensions = useElementSize(sidebarRef);
</script>

<template>
  <div class="flex min-h-[100svh] overflow-y-auto">
    <TheSidebar ref="sidebarRef" />

    <main class="main px-5">
      <div :style="`margin-left: ${dimensions.width.value + 40}px`">
        <TheMiniHeader />
        <slot />
      </div>
    </main>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(2px);
}
</style>
