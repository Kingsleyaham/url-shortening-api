<template>
  <div class="flex justify-between pb-4 pt-1 items-start">
    <img :src="logo" alt="logo" class="cursor-pointer" />
    <button @click="toggleMenu"><Bars3Icon class="size-10 text-dark-violet" /></button>
  </div>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen">
      <Transition
        enter-active-class="transform transition duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition duration-300 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <nav
          v-if="isOpen"
          class="absolute mx-auto w-[87%] top-24 min-h-fit bg-dark-violet text-white p-8 shadow-lg z-50 rounded-xl"
          @click.stop
        >
          <ul class="space-y-5 mt-4">
            <li
              v-for="item in menuItems"
              :key="item.href"
              class="transform transition duration-200 hover:scale-105 text-center font-semibold"
            >
              <a
                :href="item.href"
                class="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-md transition duration-200"
                @click="toggleMenu"
              >
                {{ item.label }}
              </a>
            </li>
            <hr class="border-grayish-violet" />
            <div class="flex flex-col gap-6 pt-3 pb-5">
              <button class="font-semibold transform transition duration-200 hover:scale-105">Login</button>
              <BaseButton label="Sign Up" variant="primary" size="lg" />
            </div>
          </ul>
        </nav>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import logo from "@/assets/img/logo.svg";
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import BaseButton from "../BaseButton.vue";

const isOpen = ref(false);

const menuItems = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped></style>
