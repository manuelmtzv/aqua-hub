<script setup lang="ts">
const openDialog = ref(false);

const closeDialog = () => {
  openDialog.value = false;
};
</script>

<template>
  <Button @click="openDialog = true">
    <template v-if="$slots['default']">
      <slot></slot>
    </template>

    <template v-else> {{ $t("addPost") }} </template>
  </Button>

  <Dialog :is-open="openDialog" :close-dialog="closeDialog">
    <template #body> {{ $t("creatingPost") }} </template>
  </Dialog>
</template>
