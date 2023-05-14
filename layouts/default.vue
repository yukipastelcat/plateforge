<template>
  <div class="bg-parentBg">
    <header
      class="sticky top-0 bg-background text-accent border-b border-border"
    >
      <div class="container mx-auto flex items-center h-14">
        <Logo />
        <NuxtLink :to="githubRepositoryUrl" class="ms-auto">
          <FontAwesomeIcon :icon="faGithub" />
        </NuxtLink>
      </div>
    </header>
    <main class="container mx-auto my-4 md:my-6">
      <slot />
    </main>
    <footer class="container mx-auto">
      {{ $t("copyrightText", { copyrightYears }) }}
    </footer>
  </div>
</template>

<script setup>
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Logo from "@/components/Logo.vue";

const { githubRepositoryUrl } = useRuntimeConfig();

const copyrightYears = computed(() => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  if (currentYear > startYear) {
    return `${startYear}-#{currentYear}`;
  }
  return currentYear;
});
</script>
