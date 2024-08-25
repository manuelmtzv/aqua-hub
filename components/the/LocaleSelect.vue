<script setup lang="ts">
const id = useId();
const { localeProperties, locales, setLocale } = useI18n();

const displayableLocales = computed(() =>
  locales.value.filter((locale) => locale.code !== localeProperties.value.code)
);
</script>

<template>
  <VMenu :aria-id="id" :distance="8">
    <div
      class="flex items-center gap-2 border rounded-md px-2 py-1 cursor-pointer"
    >
      <Icon name="mdi:web" />
      <span class="text-sm">{{ localeProperties.name }}</span>
      <Icon name="mdi:chevron-down" />
    </div>

    <template #popper>
      <div class="flex flex-col min-w-32 p-1">
        <button
          v-for="locale in displayableLocales"
          class="px-4 py-0.5 hover:bg-gray-100 rounded-md text-sm transition-colors duration-300 ease-in-out"
          @click="setLocale(locale.code)"
        >
          {{ locale.name }}
        </button>
      </div>
    </template>
  </VMenu>
</template>
