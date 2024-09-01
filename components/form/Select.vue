<script
  setup
  lang="ts"
  generic="T extends number | string | object, U extends number | string | object | null | undefined"
>
type SelectProps = {
  options: T[];
  selectedText: (value: U) => string;
  optionKey: (option: T) => string | number;
  optionValue: (option: T) => string | number;
  optionText: (option: T) => string;
};

type SelectEmits = {
  (event: "on:update", value: T): void;
};

const props = defineProps<SelectProps>();
defineEmits<SelectEmits>();

const modelValue = defineModel<U>({ required: true });
</script>

<template>
  <HeadlessListbox v-model="modelValue">
    <div class="relative mt-1">
      <HeadlessListboxButton
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="block truncate">{{ selectedText(modelValue as U) }}</span>
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
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-40"
        >
          <HeadlessListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="optionKey(option)"
            :value="optionValue(option)"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-10 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ optionText(option) }}</span
              >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
              >
                <Icon name="mdi:checked" />
              </span>
            </li>
          </HeadlessListboxOption>
        </HeadlessListboxOptions>
      </transition>
    </div>
  </HeadlessListbox>
</template>
