export const useAuthState = () => {
  const store = useAuthStore();
  const state = storeToRefs(store);
  const { updateTokens, logout } = store;

  return {
    ...state,
    updateTokens,
    logout,
  };
};
