import type { Topic, ListResponse } from "@/types";

export const useTopics = () => {
  const { API_BASE_URL } = useRuntimeConfig().public;

  return useFetch<ListResponse<Topic>>(`${API_BASE_URL}/topics`);
};
