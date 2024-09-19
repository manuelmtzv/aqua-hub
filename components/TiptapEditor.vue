<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

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
    StarterKit,
    Placeholder.configure({
      placeholder: props.placeholder ?? "Start typing...",
    }),
  ],
  editorProps: {
    attributes: {
      class: cn("input text-sm min-h-44 max-h-96 overflow-y-auto"),
    },
  },
});
</script>

<template>
  <ClientOnly>
    <EditorContent :editor="editor" v-model="value" />
  </ClientOnly>
</template>
