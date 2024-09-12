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
  <form action="" class="flex flex-col gap-2">
    <h2>{{ $t("creatingPost") }}</h2>

    <FormLabel label="">
      <FormTextInput
        v-model="postForm.title"
        :placeholder="$t('titlePlaceholder')"
      />
    </FormLabel>

    <FormLabel label="">
      <FormTextarea
        v-model="postForm.content"
        :placeholder="$t('contentPlaceholder')"
      />
    </FormLabel>

    <FormFieldsetGrid>
      <FormSelect
        :options="displayedForums"
        :default-value="$t('forumPlaceholder')"
        v-model="postForm.forum"
        :disabled="forumsStatus === 'pending'"
      />

      <FormSelect
        :options="displayedTopics"
        :default-value="$t('topicPlaceholder')"
        v-model="postForm.topic"
        :disabled="topicsStatus === 'pending'"
      />
    </FormFieldsetGrid>
  </form>
</template>

<style scoped></style>
