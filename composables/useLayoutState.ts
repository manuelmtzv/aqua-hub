export const useLayoutState = () => {
  const store = useLayoutStore();
  const state = storeToRefs(store);

  const { toggleSidebar } = store;

  return {
    ...state,
    toggleSidebar,
  };
};
