import type { UseFetchOptions } from "nuxt/app";

export const useIFetch = <T>(url: string, options: UseFetchOptions<T> = {}) => {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  });
};
