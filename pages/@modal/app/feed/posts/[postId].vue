<script setup lang="ts">
const router = useRouter();

const id = computed(() => router.currentRoute.value.params.postId as string);

const isOpen = ref(true);

function closeDialog() {
  isOpen.value = false;

  // TODO: validate this implementation in the future
  setTimeout(() => {
    router.back();
  }, 300);
}
</script>

<template>
  <Teleport to="body">
    <Dialog
      :is-open="isOpen"
      :close-dialog="closeDialog"
      panel-class="max-w-4xl"
    >
      <template #body>
        <template v-if="id">
          <PostDetails :id="id" />
        </template>
      </template>
    </Dialog>
  </Teleport>
</template>
