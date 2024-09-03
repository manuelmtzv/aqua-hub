<script setup lang="ts">
type SelectOption = {
  value: number | string;
  name: number | string;
};

type SelectProps = {
  options: SelectOption[];
  defaultValue?: number | string;
};

const props = defineProps<SelectProps>();

const modelValue = defineModel<number | string>({ required: true });

const selectedValue = computed(() => {
  return props.options.find((option) => option.value === modelValue.value);
});
</script>

<template>
  <HeadlessListbox v-model="modelValue">
    <div class="relative mt-1">
      <HeadlessListboxButton
        class="relative w-full cursor-default border text-sm border-gray-300 rounded-md shadow-sm bg-white dark:bg-dark-800 dark:border-dark-700 py-2 pl-4 pr-10 text-left focus:outline-none focus-visible:border-slate-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-300"
      >
        <span :class="['block truncate', !selectedValue && 'text-gray-400']">{{
          selectedValue?.name ?? defaultValue
        }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <Icon name="mdi:chevron-down" />
        </span>
      </HeadlessListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <HeadlessListboxOptions
          class="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white dark:bg-dark-850 py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none z-40"
        >
          <HeadlessListboxOption
            v-slot="{ active, selected }"
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
            as="template"
          >
            <li
              :class="[
                active
                  ? 'bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300',
                'relative cursor-default select-none py-2 pl-10 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ option.name }}</span
              >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 dark:text-white"
              >
                <Icon name="mdi:check" />
              </span>
            </li>
          </HeadlessListboxOption>
        </HeadlessListboxOptions>
      </transition>
    </div>
  </HeadlessListbox>
</template>
