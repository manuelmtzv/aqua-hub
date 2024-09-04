export default defineNuxtPlugin({
  name: "FishkeepersHub Api Plugin",
  setup() {
    const { API_BASE_URL } = useRuntimeConfig().public;

    const api = $fetch.create({
      baseURL: API_BASE_URL,
    });

    return {
      provide: {
        api,
      },
    };
  },
});
