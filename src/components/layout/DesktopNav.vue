<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import logo from "@/assets/img/logo.svg";
</script>

<template>
  <div class="flex justify-between items-center py-6">
    <div class="flex lg:gap-8 md:gap-6 items-center">
      <img :src="logo" alt="logo" />
      <a href="#" class="nav-link">Features</a>
      <a href="#" class="nav-link">Pricing</a>
      <a href="#" class="nav-link">Resources</a>
    </div>
    <div class="flex lg:gap-6 md:gap-4 items-center">
      <button class="nav-link">Login</button>
      <BaseButton label="Sign Up" variant="primary" size="lg" />
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  color: var(--grayish-violet);
  font-weight: 500;
}

.nav-link:hover {
  color: var(--very-dark-violet);
}
</style>
