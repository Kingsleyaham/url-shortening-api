<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import GetStarted from "./components/GetStarted.vue";
import ShortenLink from "./components/ShortenLink.vue";
import AdvancedStatistics from "./components/AdvancedStatistics.vue";
</script>

<template>
  <div class="">
    <div class="max-w-[85rem] mx-auto lg:p-2 p-8"><Navbar /></div>
    <Hero />
    <div class="md:m-0 mx-6"><ShortenLink /></div>
    <AdvancedStatistics />
    <GetStarted />
    <Footer />
  </div>
</template>

<style scoped></style>
