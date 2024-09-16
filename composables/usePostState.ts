export const usePostState = () => {
  const store = usePostStore();
  const state = storeToRefs(store);

  return {
    ...state,
  };
};
