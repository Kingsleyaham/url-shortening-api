<script setup lang="ts">
import { useScreenSize } from "@/composables/useScreenSize";
import DesktopNav from "./DesktopNav.vue";
import MobileNav from "./MobileNav.vue";

const { isDesktop } = useScreenSize();
</script>

<template>
  <div>
    <DesktopNav v-if="isDesktop" />
    <MobileNav v-else />
  </div>
</template>

<style scoped></style>
