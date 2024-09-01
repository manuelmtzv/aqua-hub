<script setup lang="ts">
const $colorMode = useColorMode();

type ColorSchemaToggleProps = {
  class?: string;
};

defineProps<ColorSchemaToggleProps>();

function toggleColorMode() {
  $colorMode.preference = $colorMode.value === "light" ? "dark" : "light";
}
</script>

<template>
  <Button :class="cn('w-fit p-1', $props.class)" @click="toggleColorMode">
    <Icon
      v-if="$colorMode.value != 'light'"
      name="ic:baseline-light-mode"
      class="icon"
    />

    <Icon v-else name="ic:baseline-dark-mode" class="icon" />
  </Button>
</template>

<style scoped>
.icon {
  @apply text-2xl;
}
</style>
