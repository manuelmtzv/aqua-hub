<script setup lang="ts">
export interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  title?: string;
  panelClass?: string;
  static?: boolean;
}

defineProps<DialogProps>();
</script>

<template>
  <HeadlessTransitionRoot appear :show="isOpen" as="template">
    <HeadlessDialog as="div" @close="closeDialog" class="relative z-10">
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/10 dark:bg-black/35" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              :class="
                cn(
                  'w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-800 p-6 text-left align-middle shadow-xl transition-all',
                  $props.panelClass
                )
              "
            >
              <HeadlessDialogTitle
                v-if="title"
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 mt-2"
              >
                {{ title }}
              </HeadlessDialogTitle>

              <div>
                <slot name="body" />
              </div>

              <div v-if="$slots['footer']" class="mt-4">
                <slot name="footer" />
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
