<script setup lang="ts">
const postForm = {
  title: "",
  content: "",
  language: "",
  topic: "",
  forum: "",
};
</script>

<template>
  <form action="" class="flex flex-col gap-2">
    <h2>{{ $t("creatingPost") }}</h2>

    <FormLabel label="">
      <FormTextInput v-model="postForm.title" placeholder="Title" />
    </FormLabel>

    <FormLabel label="">
      <FormTextarea v-model="postForm.content" placeholder="Content" />
    </FormLabel>
  </form>
</template>

<style scoped></style>
