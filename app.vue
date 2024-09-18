<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();
const dayjs = useDayjs();

provideHeadlessUseId(() => useId());

watch(
  () => route.path,
  () => dayjs.locale(locale.value),
  {
    immediate: true,
  }
);
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <PlusModalNuxtPage v-slot="{ route }">
      <NuxtPage :route="route" />
    </PlusModalNuxtPage>
  </NuxtLayout>
</template>
