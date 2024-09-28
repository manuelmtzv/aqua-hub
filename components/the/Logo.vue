<script setup lang="ts">
type LogoProps = {
  leftClass?: string;
  rightClass?: string;
};

defineProps<LogoProps>();
const localePath = useLocalePath();

const route = computed(() => {
  const { user } = useAuthState();

  return user ? localePath("/app") : localePath("/");
});
</script>

<template>
  <NuxtLink :to="route" :class="[cn('text-xl font-medium', leftClass)]"
    >Fishkeepers<span :class="[cn('text-xl underline font-medium', rightClass)]"
      >Hub</span
    ></NuxtLink
  >
</template>

<style></style>
