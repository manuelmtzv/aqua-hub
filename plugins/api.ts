export default defineNuxtPlugin({
  name: "FishkeepersHub Api Plugin",
  setup() {
    const { $i18n } = useNuxtApp();
    const { API_BASE_URL } = useRuntimeConfig().public;

    const api = $fetch.create({
      baseURL: API_BASE_URL,
      onRequest(context) {
        context.options.headers = {
          ...context.options.headers,
          "Accept-Language": $i18n.locale.value,
          Authorization: `Bearer ${useCookie("access_token").value}`,
        };
      },
    });

    return {
      provide: {
        api,
      },
    };
  },
});
