/** @type {import('tailwindcss').Config} */ export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "dark-100": "#F8F8F8",
        "dark-200": "#E0E0E0",
        "dark-300": "#C8C8C8",
        "dark-400": "#A8A8A8",
        "dark-500": "#888888",
        "dark-600": "#686868",
        "dark-700": "#484848",
        "dark-800": "#303030",
        "dark-850": "#1F1F1F",
        "dark-900": "#0F0F0F",
      },
    },
    fontFamily: { sans: ['"Montserrat"', "sans-serif"] },
  },
  plugins: [],
};
