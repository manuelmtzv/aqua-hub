<script setup lang="ts">
import { forumRepository, topicRepository } from "@/repository";

const { data: forumsData, status: forumsStatus } = await useAsyncData(() =>
  forumRepository().getForums()
);
const { data: topicsData, status: topicsStatus } = await useAsyncData(() =>
  topicRepository().getTopics()
);

const postForm = reactive({
  title: "",
  content: "",
  language: "",
  topic: "",
  forum: "",
});

const displayedForums = computed(() => {
  return (
    forumsData.value?.data.map((forum) => {
      return {
        value: forum.id,
        name: forum.title,
      };
    }) ?? []
  );
});

const displayedTopics = computed(() => {
  return (
    topicsData.value?.data.map((topic) => {
      return {
        value: topic.id,
        name: topic.title,
      };
    }) ?? []
  );
});
</script>

<template>
  <form action="" class="flex flex-col gap-4">
    <h2 class="font-medium text-lg">{{ $t("post.creatingPost") }}</h2>

    <FormLabel label="">
      <FormTextInput
        v-model="postForm.title"
        :placeholder="$t('post.titlePlaceholder')"
      />
    </FormLabel>

    <FormLabel label="">
      <FormTextarea
        v-model="postForm.content"
        :placeholder="$t('post.contentPlaceholder')"
      />
    </FormLabel>

    <FormFieldsetGrid class="gap-4">
      <FormSelect
        :options="displayedForums"
        :default-value="$t('post.forumPlaceholder')"
        v-model="postForm.forum"
        :disabled="forumsStatus === 'pending'"
      />

      <FormSelect
        :options="displayedTopics"
        :default-value="$t('post.topicPlaceholder')"
        v-model="postForm.topic"
        :disabled="topicsStatus === 'pending'"
      />
    </FormFieldsetGrid>

    <BaseDropdown title="Language">
      <!-- <FormRadioGroup v-model="postForm.language">
        <FormRadio value="en" label="English" />
        <FormRadio value="es" label="Spanish" />
        <FormRadio value="fr" label="French" />
      </FormRadioGroup> -->

      Hola
    </BaseDropdown>

    <FormButton class="button--black text-sm">
      {{ $t("post.submit") }}
    </FormButton>
  </form>
</template>

<style scoped></style>
