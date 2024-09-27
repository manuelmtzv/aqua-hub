import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { User } from "@/types";

export const userRepository = <T>(fetch?: $Fetch<T, NitroFetchRequest>) => {
  if (!fetch) {
    fetch = useNuxtApp().$api;
  }

  return {
    async getMe(): Promise<User> {
      return fetch<User>("/users/me");
    },

    async getUserPosts(userId: string): Promise<User> {
      return fetch<User>(`/users/${userId}/posts`);
    },
  };
};
