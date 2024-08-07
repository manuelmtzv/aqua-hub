import { storeToRefs } from "pinia";

export const useAuthState = () => {
  const store = useAuthStore();
  const state = storeToRefs(store);
  const { updateTokens } = store;

  return {
    updateTokens,
    ...state,
  };
};
