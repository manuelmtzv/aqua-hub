<script setup lang="ts">
import moment from "moment";

const { locale } = useI18n();
moment.locale(locale.value);

provideHeadlessUseId(() => useId());
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
