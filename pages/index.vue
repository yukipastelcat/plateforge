<template>
  <div class="py-16">
    <h1 class="text-5xl text-center">
      {{ t("title") }}
    </h1>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<i18n lang="json">
{
  "en": {
    "title": "Create custom license plates for your car models and games with ease."
  }
}
</i18n>
