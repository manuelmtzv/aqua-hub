import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { ListResponse, Post, PostForm } from "@/types";

export const postRepository = <T>(fetch?: $Fetch<T, NitroFetchRequest>) => {
  if (!fetch) {
    fetch = useNuxtApp().$api;
  }

  return {
    async getPost(id: string): Promise<Post> {
      return fetch<Post>(`/posts/${id}`);
    },

    async getPosts(): Promise<ListResponse<Post>> {
      return fetch<ListResponse<Post>>("/posts");
    },

    async createPost(payload: PostForm): Promise<Post> {
      return fetch<Post>("/posts", {
        method: "POST",
        body: payload,
      });
    },
  };
};
