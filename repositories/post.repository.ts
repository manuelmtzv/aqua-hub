import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { ListResponse, Post } from "@/types";

export const postRepository = <T>(fetch?: $Fetch<T, NitroFetchRequest>) => {
  const { $api } = useNuxtApp();

  if (!fetch) {
    fetch = $api;
  }

  return {
    getPosts(): Promise<ListResponse<Post>> {
      return fetch<ListResponse<Post>>("/posts");
    },
  };
};
