<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";

import { postRepository, forumRepository, topicRepository } from "@/repository";
import type { PostForm } from "@/types";

type PostFormEmits = {
  (event: "onCancel"): void;
  (event: "onSuccess"): void;
};

const emit = defineEmits<PostFormEmits>();
const { withMessage } = helpers;
const { t } = useI18n();
const toast = useToast();
const { submittingPost } = usePostState();

const refreshPosts = () => refreshNuxtData("posts");

const { data: forumsData, status: forumsStatus } = await useAsyncData(
  forumRepository().getForums
);
const { data: topicsData, status: topicsStatus } = await useAsyncData(
  topicRepository().getTopics
);

const form: PostForm = reactive({
  title: "",
  content: "",
  language: useI18n().locale.value,
  topic: "",
  forum: "",
});

const rules = {
  title: { required: withMessage(t("post.titleRequired"), required) },
  content: { required: withMessage(t("post.contentRequired"), required) },
  topic: { required: withMessage(t("post.topicRequired"), required) },
  forum: { required: withMessage(t("post.forumRequired"), required) },
};

const v$ = useVuelidate(rules, form);

async function submitPost() {
  v$.value.$validate();
  if (v$.value.$error) return;

  submittingPost.value = true;

  try {
    const post = await postRepository().createPost(form);
    await refreshPosts();

    toast.success(t("post.created"));
    emit("onSuccess");
  } catch (error) {
    toast.error(getError(error));
  } finally {
    submittingPost.value = false;
  }
}

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
  <form @submit.prevent="submitPost">
    <h2 class="font-medium text-lg">{{ $t("post.creatingPost") }}</h2>

    <fieldset class="flex flex-col gap-4 my-6">
      <FormLabel :error="v$.title.$errors[0]?.$message">
        <FormTextInput
          v-model="form.title"
          :placeholder="$t('post.titlePlaceholder')"
        />
      </FormLabel>

      <FormLabel :error="v$.content.$errors[0]?.$message">
        <TiptapEditor
          v-model="form.content"
          :placeholder="$t('post.contentPlaceholder')"
        />
      </FormLabel>

      <FormFieldsetGrid class="gap-4">
        <FormLabel :error="v$.forum.$errors[0]?.$message">
          <FormSelect
            :options="displayedForums"
            :default-value="$t('post.forumPlaceholder')"
            v-model="form.forum"
            :disabled="forumsStatus === 'pending'"
          />
        </FormLabel>

        <FormLabel :error="v$.topic.$errors[0]?.$message">
          <FormSelect
            :options="displayedTopics"
            :default-value="$t('post.topicPlaceholder')"
            v-model="form.topic"
            :disabled="topicsStatus === 'pending'"
          />
        </FormLabel>
      </FormFieldsetGrid>
    </fieldset>

    <div class="flex justify-between items-center gap-4">
      <FormButton
        class="button--white text-sm"
        @click.prevent="$emit('onCancel')"
      >
        {{ $t("app.cancel") }}
      </FormButton>

      <FormButton class="button--black text-sm" :disabled="submittingPost">
        {{ $t("post.submit") }}
      </FormButton>
    </div>

    <pre>{{ form }}</pre>
  </form>
</template>

<style scoped></style>
