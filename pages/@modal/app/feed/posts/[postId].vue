<script setup lang="ts">
const router = useRouter();
const modalRouter = useModalRouter();

const id = computed(() => router.currentRoute.value.params.postId as string);

const isOpen = ref(true);

function closeDialog() {
  isOpen.value = false;

  setTimeout(() => {
    modalRouter.close();
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
          <PostDetails
            v-motion
            :initial="{
              opacity: 0,
            }"
            :enter="{
              opacity: 1,
              transition: {
                delay: 0.75,
              },
            }"
            :id="id"
          />
        </template>
      </template>
    </Dialog>
  </Teleport>
</template>
