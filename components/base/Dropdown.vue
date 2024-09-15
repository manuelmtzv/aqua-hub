<script setup lang="ts">
import { Collapse } from "vue-collapsed";

type DropdownProps = {
  title: string;
  class?: string;
};

defineProps<DropdownProps>();

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <section :class="cn('w-full', $props.class)">
    <button
      v-if="!$slots['title']"
      class="flex items-center gap-4 justify-between w-full"
      @click.prevent="toggleDropdown"
    >
      <h3>{{ title }}</h3>

      <Icon v-if="!isOpen" name="heroicons:chevron-down" />

      <Icon v-else name="heroicons:chevron-up" />
    </button>

    <slot name="title" toggleDropdown="toggleDropdown" />

    <Collapse :when="isOpen">
      <div class="pt-2 w-full">
        <slot />
      </div>
    </Collapse>
  </section>
</template>
