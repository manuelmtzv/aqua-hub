<template>
  <div class="flex min-h-[100svh]">
    <TheSidebar />

    <main class="main px-5">
      <TheMiniHeader />
      <slot />
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
