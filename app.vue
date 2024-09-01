<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();
const dayjs = useDayjs();

provideHeadlessUseId(() => useId());

watch(
  () => route.path,
  () => dayjs.locale(locale.value)
);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
