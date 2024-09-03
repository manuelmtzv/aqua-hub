import type { Forum, ListResponse } from "@/types";

export const useForums = () => {
  const { API_BASE_URL } = useRuntimeConfig().public;

  return useFetch<ListResponse<Forum>>(`${API_BASE_URL}/forums`);
};
