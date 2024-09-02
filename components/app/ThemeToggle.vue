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
  <ColorScheme placeholder="..." tag="span">
    <Button :class="cn('w-fit p-1', $props.class)" @click="toggleColorMode">
      <Icon
        v-if="$colorMode.preference != 'light'"
        name="ic:baseline-light-mode"
        class="icon"
      />

      <Icon v-else name="ic:baseline-dark-mode" class="icon" />
    </Button>
  </ColorScheme>
</template>

<style scoped>
.icon {
  @apply text-2xl;
}
</style>
