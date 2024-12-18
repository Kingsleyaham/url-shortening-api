<script setup lang="ts">
import heroImg from "@/assets/img/illustration-working.svg";
import BaseButton from "./BaseButton.vue";
</script>

<template>
  <section class="md:my-16 my-8">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6 items-center md:p-0 sm:p-8 p-4">
      <div class="space-y-7 lg:w-8/12 mx-auto p-8 lg:p-1 md:text-left text-center">
        <h1 class="font-bold lg:text-6xl text-5xl text-very-dark-violet md:leading-relaxed leading-normal">
          More than just shorter links
        </h1>
        <p class="text-[20px] text-grayish-violet font-medium leading-relaxed">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>

        <BaseButton label="Get Started" variant="primary" size="lg" class="text-xl py-3 px-4" />
      </div>
      <div class="md:order-last order-first">
        <img :src="heroImg" loading="lazy" alt="hero_img" class="ml-20 md:ml-0" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
