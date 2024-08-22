<template>
  <div class="flex min-h-[100svh] gap-4">
    <TheSidebar />

    <main class="main">
      <slot />
    </main>
  </div>

  <TheFooter />
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
