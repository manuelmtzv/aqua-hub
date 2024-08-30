<script setup lang="ts">
const { isSidebarOpen } = useLayoutState();
const { t } = useI18n();

const openDialog = ref(false);

function closeDialog() {
  openDialog.value = false;
}
</script>

<template>
  <Button
    :class="[
      'flex gap-2 bg-gray-50 rounded-lg h-[2.375rem] items-center border-2',
      isSidebarOpen ? 'px-2 py-1' : 'p-1 justify-center',
    ]"
    @click="openDialog = true"
  >
    <Icon name="mdi:magnify" class="text-xl" />
    <span v-if="isSidebarOpen" class="text-sm">{{
      t("navigationSearch")
    }}</span>
  </Button>

  <Dialog :is-open="openDialog" :close-dialog="closeDialog">
    <template #body>
      <input
        type="text"
        class="w-full p-2 border rounded-lg dark:bg-dark-700"
        placeholder="Search..."
      />
    </template>
  </Dialog>
</template>
