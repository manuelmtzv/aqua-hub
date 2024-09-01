// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      title: "FishKeepersHub",
    },
  },
  css: [
    "~/assets/css/main.css",
    "vue-toast-notification/dist/theme-bootstrap.css",
    "@vuepic/vue-datepicker/dist/main.css",
  ],
  modules: [
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/icon",
    "@vueuse/motion/nuxt",
    "@nuxtjs/i18n",
    "nuxt-headlessui",
    "@nuxtjs/color-mode",
    "floating-vue/nuxt",
  ],
  headlessui: {
    prefix: "Headless",
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "lax",
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
      },
      {
        code: "es",
        iso: "es-ES",
        name: "Español",
      },
    ],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
  colorMode: {
    classSuffix: "",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 500, 600, 700, 800, 900],
      },
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.FISHKEEPERS_HUB_API_URL,
    },
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});
