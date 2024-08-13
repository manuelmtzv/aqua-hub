<template>
  <TheHeader />

  <main class="main">
    <slot />
  </main>

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
