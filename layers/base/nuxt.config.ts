// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/css/elements/links.css",
    "@/assets/css/objects/theme-provider.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "./locales",
    locales: [
      {
        code: "en",
        file: "en-US.json",
      },
    ],
  },
});
