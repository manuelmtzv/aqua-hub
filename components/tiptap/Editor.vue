<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";

type TiptapEditorProps = {
  placeholder?: string;
};

const props = defineProps<TiptapEditorProps>();
const value = defineModel<string>({ required: true });

const editor = useEditor({
  content: value.value,
  onCreate({ editor }) {
    value.value = editor.getHTML();
  },
  onUpdate({ editor }) {
    value.value = editor.getHTML();
  },
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3],
      },
    }),
    Underline,
    Placeholder.configure({
      placeholder: props.placeholder ?? "Start typing...",
    }),
  ],
  editorProps: {
    attributes: {
      class: cn(
        "block w-full px-4 py-3 rounded-md shadow-sm focus:outline-none text-sm  dark:bg-dark-800 dark:border-dark-700 rounded-t-none min-h-44 max-h-96 overflow-y-auto"
      ),
    },
  },
});
</script>

<template>
  <ClientOnly>
    <div
      v-if="editor"
      class="border border-gray-300 rounded-md focus:border-gray-500"
    >
      <nav class="border-b px-1.5 py-1 flex gap-2">
        <TiptapButtonWrapper
          :is-active="editor.isActive('bold')"
          @click.prevent="editor?.chain().focus().toggleBold().run()"
        >
          <Icon name="heroicons:bold" size="14" />
        </TiptapButtonWrapper>

        <TiptapButtonWrapper
          :is-active="editor.isActive('italic')"
          @click.prevent="editor?.chain().focus().toggleItalic().run()"
        >
          <Icon name="heroicons:italic" size="14" />
        </TiptapButtonWrapper>

        <TiptapButtonWrapper
          :is-active="editor.isActive('underline')"
          @click.prevent="editor?.chain().focus().toggleUnderline().run()"
        >
          <Icon name="heroicons:underline" size="14" />
        </TiptapButtonWrapper>

        <TiptapButtonWrapper
          :is-active="editor.isActive('strike')"
          @click.prevent="editor?.chain().focus().toggleStrike().run()"
        >
          <Icon name="heroicons:strikethrough" size="14" />
        </TiptapButtonWrapper>

        <TiptapButtonWrapper
          :is-active="editor.isActive('heading', { level: 1 })"
          @click.prevent="
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          "
        >
          <Icon name="heroicons:h1" size="14" />
        </TiptapButtonWrapper>

        <TiptapButtonWrapper
          :is-active="editor.isActive('heading', { level: 2 })"
          @click.prevent="
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          "
        >
          <Icon name="heroicons:h2" size="14" />
        </TiptapButtonWrapper>

        <TiptapButtonWrapper
          :is-active="editor.isActive('heading', { level: 3 })"
          @click.prevent="
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          "
        >
          <Icon name="heroicons:h3" size="14" />
        </TiptapButtonWrapper>

        <TiptapButtonWrapper
          :is-active="editor.isActive('bulletList')"
          @click.prevent="editor?.chain().focus().toggleBulletList().run()"
        >
          <Icon name="heroicons:list-bullet" size="14" />
        </TiptapButtonWrapper>

        <TiptapButtonWrapper
          :is-active="editor.isActive('orderedList')"
          @click.prevent="editor?.chain().focus().toggleOrderedList().run()"
        >
          <Icon name="heroicons:numbered-list" size="14" />
        </TiptapButtonWrapper>
      </nav>

      <EditorContent :editor="editor" v-model="value" class="" />
    </div>
  </ClientOnly>
</template>

<style lang="scss">
.tiptap {
  :first-child {
    margin-top: 0;
  }
  h1,
  h2,
  h3 {
    text-wrap: pretty;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }
}
</style>
