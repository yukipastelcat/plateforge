// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
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
