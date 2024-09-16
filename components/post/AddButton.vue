<script setup lang="ts">
const { submittingPost } = usePostState();
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

    <template v-else> {{ $t("post.addPost") }} </template>
  </Button>

  <Dialog
    panel-class="max-w-3xl"
    :is-open="openDialog"
    :close-dialog="closeDialog"
    :loading="submittingPost"
  >
    <template #body>
      <PostCreateForm @on-cancel="closeDialog" @on-success="closeDialog" />
    </template>
  </Dialog>
</template>
