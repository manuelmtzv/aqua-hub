import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { ListResponse, Forum } from "@/types";

export const forumRepository = <T>(fetch?: $Fetch<T, NitroFetchRequest>) => {
  if (!fetch) {
    fetch = useNuxtApp().$api;
  }

  return {
    async getForums(): Promise<ListResponse<Forum>> {
      return fetch<ListResponse<Forum>>("/forums");
    },
  };
};
