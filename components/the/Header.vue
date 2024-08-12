<script setup lang="ts">
const { user } = useAuthState();
</script>

<template>
  <header class="py-6 border-b-2">
    <section class="container flex justify-between gap-4 items-center">
      <nuxt-link to="/">
        <h1 class="text-2xl font-semibold">Fishkeepers Hub App</h1>
      </nuxt-link>

      <nav>
        <ul class="flex gap-3 items-center">
          <li><nuxt-link to="/">Inicio</nuxt-link></li>
          <li><nuxt-link to="/about">Sobre el proyecto</nuxt-link></li>
          <li v-if="user"><nuxt-link to="/feed">Feed</nuxt-link></li>
        </ul>
      </nav>
    </section>
  </header>
</template>
