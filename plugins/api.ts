export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: runtimeConfig.public.API_BASE_URL,
    onRequest({ request, options, error }) {},
    async onResponseError({ response }) {},
  });
  return {
    provide: {
      api,
    },
  };
});
