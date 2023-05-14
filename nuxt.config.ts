import packageJSON from "./package.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/css/elements/links.css",
    "@/assets/css/objects/theme-provider.css",
  ],
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  runtimeConfig: {
    public: {
      githubRepositoryUrl: packageJSON.repository.url,
    },
  },
});
