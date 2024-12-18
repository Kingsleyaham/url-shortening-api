<template>
  <div class="rounded-lg px-6 py-4 bg-white md:text-base text-sm">
    <div class="flex md:justify-between justify-center gap-4 items-center md:flex-row flex-col">
      <p
        class="md:text-lg text-dark-violet font-semibold md:text-left text-center md:border-0 border-b border-b-gray pb-3 md:pb-0"
      >
        <slot>{{ url }}</slot>
      </p>
      <div class="flex gap-6 items-center md:flex-row flex-col md:w-auto w-full">
        <p class="md:text-lg font-semibold text-cyan">
          <slot>{{ shortenedUrl }}</slot>
        </p>
        <BaseButton size="lg" variant="primary" label="Copy" class="rounded-md md:w-auto w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from "./BaseButton.vue";

interface UrlListProps {
  url: string;
  shortenedUrl: string;
}

const props = withDefaults(defineProps<UrlListProps>(), {
  url: "",
  shortenedUrl: "",
});
</script>

<style scoped></style>
