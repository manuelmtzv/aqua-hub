import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { ListResponse, Topic } from "@/types";

export const topicRepository = <T>(fetch?: $Fetch<T, NitroFetchRequest>) => {
  if (!fetch) {
    fetch = useNuxtApp().$api;
  }

  return {
    async getTopics(): Promise<ListResponse<Topic>> {
      return fetch<ListResponse<Topic>>("/topics");
    },
  };
};
