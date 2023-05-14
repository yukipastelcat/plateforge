<template>
  <div class="bg-canvas text-ink flex flex-col min-h-screen">
    <header class="sticky top-0 bg-canvas border-b border-frame z-10">
      <div class="container px-4 mx-auto flex items-center h-14">
        <NuxtLink
          class="block h-full text-inherit hover:no-underline hover:text-accent"
          to="/"
        >
          <AppLogo width="7rem" />
        </NuxtLink>
        <NuxtLink
          :to="githubRepositoryUrl"
          target="_blank"
          class="ms-auto text-inherit hover:no-underline hover:text-accent"
        >
          <FontAwesomeIcon :icon="faGithub" />
        </NuxtLink>
      </div>
    </header>
    <main class="container px-4 mx-auto my-4 md:my-6 grow">
      <slot />
    </main>
    <footer
      class="container px-4 mx-auto py-4 flex items-center border-t border-frame"
    >
      <p>{{ t("copyright", { copyrightYears }) }}</p>
      <NuxtLink
        :to="githubRepositoryUrl"
        target="_blank"
        class="ms-auto text-inherit hover:no-underline hover:text-accent"
      >
        <FontAwesomeIcon :icon="faGithub" />
      </NuxtLink>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppLogo from "@/components/AppLogo.vue";

const { githubRepositoryUrl } = useRuntimeConfig().public;
const { t } = useI18n();

const copyrightYears = computed(() => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  if (currentYear > startYear) {
    return `${startYear}-#{currentYear}`;
  }
  return currentYear;
});
</script>

<i18n lang="json">
{
  "en": {
    "copyright": "© {copyrightYears} Plateforge - MIT License"
  }
}
</i18n>
