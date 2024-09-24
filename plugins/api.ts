export default defineNuxtPlugin({
  name: "FishkeepersHub Api Plugin",
  setup() {
    const { $i18n } = useNuxtApp();
    const { API_BASE_URL } = useRuntimeConfig().public;

    const api = $fetch.create({
      baseURL: API_BASE_URL,
      onRequest({ options }) {
        const headers = (options.headers ||= {} as Headers);

        // Check the reactive property access
        addHeader(headers, "Accept-Language", $i18n.locale);
        addHeader(
          headers,
          "Authorization",
          `Bearer ${useCookie("access_token").value}`
        );
      },
    });

    return {
      provide: {
        api,
      },
    };
  },
});

function addHeader(
  headers: Headers | Array<Record<string, any>> | unknown,
  key: string,
  value: string
) {
  if (Array.isArray(headers)) {
    headers.push([key, value]);
  } else if (headers instanceof Headers) {
    headers.set(key, value);
  } else {
    // Ensure the original object is mutated
    (headers as Record<string, any>)[key] = value;
  }
}
