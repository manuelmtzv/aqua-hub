<script setup lang="ts">
type FormTextInputProps = {
  modelValue: string;
  type?: "text" | "password" | "email";
};

withDefaults(defineProps<FormTextInputProps>(), {
  type: "text",
});

const value = defineModel();
</script>

<template>
  <input v-model="value" :type="type" class="input" />
</template>
