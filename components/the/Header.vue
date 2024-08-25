<script setup lang="ts">
const { user } = useAuthState();
const { logout } = useAuth();
const { t } = useI18n();
const route = useRoute();

async function handleLogout() {
  logout();
  await navigateTo("/auth/login");
}

const mainRoute = computed(() => route.path === "/");
const localePath = useLocalePath();
</script>

<template>
  <header
    :class="[
      'py-6 border-b-2 border-transparent transition-colors duration-300 ease-in-out',
      !mainRoute && 'border-b-gray-200',
    ]"
  >
    <section class="container flex justify-between gap-4 items-center">
      <NuxtLink :to="localePath('/')">
        <h1 class="text-2xl font-semibold">FishKeepersHub</h1>
      </NuxtLink>

      <nav>
        <ul class="flex gap-2 items-center">
          <template v-if="!user">
            <li>
              <NuxtLink class="link" :to="localePath('/')">{{
                t("headerHome")
              }}</NuxtLink>
            </li>
            <span class="mx-2">|</span>
            <li>
              <NuxtLink class="link" :to="localePath('/auth/login')">{{
                t("headerLogin")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink class="link" :to="localePath('/auth/register')">{{
                t("headerRegister")
              }}</NuxtLink>
            </li>
          </template>

          <template v-else>
            <li><NuxtLink class="link" to="/feed">Feed</NuxtLink></li>
            <li><button @click="handleLogout">Cerrar sesión</button></li>
          </template>

          <TheLocaleSelect />
        </ul>
      </nav>
    </section>
  </header>
</template>

<style scoped>
.link {
  @apply px-2 py-1.5 relative text-gray-500;
}

.link[aria-current="page"] {
  @apply text-black transition-colors duration-300 ease-in-out;
}

.link[aria-current="page"]::after {
  @apply bg-black w-full;
}

.link::after {
  @apply absolute left-0 right-0 bottom-0 h-0.5 w-0 bg-gray-500 transition-all duration-300 ease-in-out;
  content: "";
}

.link:hover::after {
  @apply w-full;
}
</style>
