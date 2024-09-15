<script setup lang="ts">
const { user } = useAuthState();
const { logout } = useAuth();
const { t } = useI18n();
const route = useRoute();
const localePath = useLocalePath();

async function handleLogout() {
  logout();
  await navigateTo(localePath("/auth/login"));
}
</script>

<template>
  <header :class="['py-6 border-b-2 border-transparent ease-in-out']">
    <section class="container flex justify-between gap-4 items-center">
      <NuxtLink :to="localePath('/')">
        <h1 class="text-2xl font-semibold">FishKeepersHub</h1>
      </NuxtLink>

      <ul class="flex gap-2 items-center">
        <template v-if="!user">
          <li>
            <NuxtLink class="link" :to="localePath('/')">{{
              t("header.home")
            }}</NuxtLink>
          </li>
          <span class="mx-2">|</span>
          <li>
            <NuxtLink class="link" :to="localePath('/auth/login')">{{
              t("header.login")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="localePath('/auth/register')">{{
              t("header.register")
            }}</NuxtLink>
          </li>
        </template>

        <template v-else>
          <li>
            <NuxtLink class="link" :to="localePath('/app')">{{
              t("header.enter")
            }}</NuxtLink>
          </li>
        </template>

        <AppLocaleSelect />

        <AppThemeToggle />
      </ul>
    </section>
  </header>
</template>

<style scoped>
.link {
  @apply px-2 py-1.5 relative text-gray-500 dark:text-dark-300;
}

.link[aria-current="page"] {
  @apply text-black dark:text-dark-100;
}

.link[aria-current="page"]::after {
  @apply bg-black w-full dark:bg-dark-100;
}

.link::after {
  @apply absolute left-0 right-0 bottom-0 h-0.5 w-0 bg-gray-500 transition-all duration-300 ease-in-out dark:bg-dark-100;
  content: "";
}

.link:hover::after {
  @apply w-full;
}
</style>
