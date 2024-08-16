<script setup lang="ts">
const { user } = useAuthState();
const { logout } = useAuth();
const route = useRoute();

async function handleLogout() {
  logout();
  await navigateTo("/auth/login");
}

const mainRoute = computed(() => route.path === "/");
</script>

<template>
  <header
    :class="[
      'py-6 border-b-2 border-transparent transition-colors duration-300 ease-in-out',
      !mainRoute && 'border-b-gray-200',
    ]"
  >
    <section class="container flex justify-between gap-4 items-center">
      <nuxt-link to="/">
        <h1 class="text-2xl font-semibold">Fishkeepers Hub</h1>
      </nuxt-link>

      <nav>
        <ul class="flex gap-2 items-center">
          <template v-if="!user">
            <li><nuxt-link class="link" to="/">Inicio</nuxt-link></li>
            <li>
              <nuxt-link class="link" to="/about">Sobre el proyecto</nuxt-link>
            </li>
            <li>
              <nuxt-link class="link" to="/auth/login"
                >Iniciar sesión</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="link" to="/auth/register"
                >Registrarse</nuxt-link
              >
            </li>
          </template>

          <template v-else>
            <li><nuxt-link class="link" to="/feed">Feed</nuxt-link></li>
            <li><button @click="handleLogout">Cerrar sesión</button></li>
          </template>
        </ul>
      </nav>
    </section>
  </header>
</template>

<style scoped>
.link {
  @apply px-2 py-1;
}
</style>
