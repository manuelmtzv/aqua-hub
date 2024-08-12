// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
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
      Montserrat: true,
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.FISHKEEPERS_HUB_API_URL,
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt"],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});
