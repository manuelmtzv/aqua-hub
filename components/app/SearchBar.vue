<script setup lang="ts">
const { isSidebarOpen } = useLayoutState();
const { t } = useI18n();
</script>

<template>
  <button
    :class="[
      'flex gap-2 bg-gray-100 rounded-lg h-[2.375rem] items-center border-2',
      isSidebarOpen ? 'px-2 py-1' : 'p-1 justify-center',
    ]"
  >
    <Icon name="mdi:magnify" class="text-xl" />
    <span v-if="isSidebarOpen" class="text-sm">{{
      t("navigationSearch")
    }}</span>
  </button>
</template>
