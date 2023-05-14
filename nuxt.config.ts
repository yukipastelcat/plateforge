import packageJSON from "./package.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["./layers/base", "./layers/home", "./layers/generator"],
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    strategy: "no_prefix",
    langDir: "./locales",
    locales: [{ code: "en", file: "en-US.json" }],
  },
  runtimeConfig: {
    public: {
      githubRepositoryUrl: packageJSON.repository.url,
    },
  },
});
