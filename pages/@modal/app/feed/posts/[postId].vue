<script setup lang="ts">
const router = useRouter();
const modalRouter = useModalRouter();

const id = computed(() => router.currentRoute.value.params.postId);

const isOpen = ref(true);

function closeDialog() {
  isOpen.value = false;
  modalRouter.close();
}
</script>

<template>
  <Teleport to="body">
    <Dialog :is-open="isOpen" :close-dialog="closeDialog">
      <template #body>
        <template v-if="id">
          <PostDetails :id="id" />
        </template>
      </template>
    </Dialog>
  </Teleport>
</template>
