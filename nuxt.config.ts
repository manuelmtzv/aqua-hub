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
      title: "Fishkeepers Hub",
    },
  },
  css: [
    "~/assets/css/main.css",
    "vue-toast-notification/dist/theme-bootstrap.css",
    "@vuepic/vue-datepicker/dist/main.css",
  ],
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
  modules: [
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "floating-vue/nuxt",
    "@nuxt/icon"
  ],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});