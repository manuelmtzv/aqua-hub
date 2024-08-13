<script setup lang="ts">
const { user } = useAuthState();
const { logout } = useAuth();

async function handleLogout() {
  logout();
  await navigateTo("/auth/login");
}
</script>

<template>
  <header class="py-6 border-b-2">
    <section class="container flex justify-between gap-4 items-center">
      <nuxt-link to="/">
        <h1 class="text-2xl font-semibold">Fishkeepers Hub App</h1>
      </nuxt-link>

      <nav>
        <ul class="flex gap-3 items-center">
          <template v-if="!user">
            <li><nuxt-link to="/">Inicio</nuxt-link></li>
            <li><nuxt-link to="/about">Sobre el proyecto</nuxt-link></li>
            <li><nuxt-link to="/auth/login">Iniciar sesión</nuxt-link></li>
            <li><nuxt-link to="/auth/register">Registrarse</nuxt-link></li>
          </template>

          <template v-else>
            <li><nuxt-link to="/feed">Feed</nuxt-link></li>
            <li><button @click="handleLogout">Cerrar sesión</button></li>
          </template>
        </ul>
      </nav>
    </section>
  </header>
</template>
