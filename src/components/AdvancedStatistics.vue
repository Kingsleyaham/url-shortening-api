<template>
  <div class="bg-slate-100">
    <div class="mt-12 max-w-[85rem] mx-auto md:px-0 md:pt-16 pb-24 p-6">
      <div class="text-center max-w-2xl mx-auto space-y-3 pb-32">
        <h1 class="text-4xl font-bold text-very-dark-blue">Advanced Statistics</h1>
        <p class="text-xl font-medium">
          Track how your links are performing across the web with our advanced Statistics dashboard
        </p>
      </div>
      <div class="flex md:gap-9 gap-24 md:flex-row flex-col mx-auto relative items-start">
        <div class="relative bg-white shadow-sm rounded-lg px-8 pb-12 pt-20 z-10 md:text-left text-center">
          <div class="flex -top-12 md:left-8 left-[40%] absolute p-7 rounded-full bg-dark-violet">
            <img :src="iconBrandImg" alt="brand_recognition" />
          </div>
          <h2 class="py-4 text-very-dark-blue font-bold text-2xl">Brand Recognition</h2>
          <p class="font-medium text-lg leading-relaxed">
            Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil
            confidence in your content
          </p>
        </div>
        <div class="relative bg-white shadow-sm rounded-lg px-8 pb-12 pt-20 z-10 md:mt-10 md:text-left text-center">
          <div class="flex -top-12 md:left-8 left-[40%] absolute p-7 rounded-full bg-dark-violet">
            <img :src="iconDetailedRecords" alt="brand_recognition" />
          </div>
          <h2 class="py-4 text-very-dark-blue font-bold text-2xl">Detailed Records</h2>
          <p class="font-medium text-lg leading-relaxed">
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps
            inform better decisions.
          </p>
        </div>
        <div class="relative bg-white shadow-sm rounded-lg px-8 pb-12 pt-20 z-10 md:mt-20 md:text-left text-center">
          <div class="flex -top-12 md:left-8 left-[40%] absolute p-7 rounded-full bg-dark-violet">
            <img :src="iconFullyCustomizable" alt="brand_recognition" />
          </div>
          <h2 class="py-4 text-very-dark-blue font-bold text-2xl">Fully Customizable</h2>
          <p class="font-medium text-lg leading-relaxed">
            Improve brand awareness and content discoverability through customizable links, supercharging audience
            engagement.
          </p>
        </div>

        <div class="absolute md:w-10/12 w-2.5 md:top-1/2 md:left-0 left-[45%] mx-6 md:h-2.5 h-full bg-cyan"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import iconBrandImg from "@/assets/img/icon-brand-recognition.svg";
import iconDetailedRecords from "@/assets/img/icon-detailed-records.svg";
import iconFullyCustomizable from "@/assets/img/icon-detailed-records.svg";
</script>
