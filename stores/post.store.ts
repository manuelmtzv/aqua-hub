export const usePostStore = defineStore("postStore", () => {
  const submittingPost = ref(false);

  return {
    submittingPost,
  };
});
