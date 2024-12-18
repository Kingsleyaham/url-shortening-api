<script lang="ts" setup>
import FacebookIcon from "../icons/FacebookIcon.vue";
import InstagramIcon from "../icons/InstagramIcon.vue";
import PinterestIcon from "../icons/PinterestIcon.vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
</script>

<template>
  <footer class="bg-very-dark-violet p-16 text-white">
    <div class="grid md:grid-cols-6 grid-cols-1 text-center md:text-left gap-16 lg:mr-32">
      <div class="md:col-span-2 mx-auto">
        <h1 class="text-4xl font-bold">Shortly</h1>
      </div>
      <div class="md:col-span-1 md:space-y-6 space-y-5 mx-auto">
        <h6 class="font-bold">Features</h6>
        <div class="space-y-2 text-gray">
          <a href="#" class="footer-link">Link Shortening</a>
          <a href="#" class="footer-link">Branded Links</a>
          <a href="#" class="footer-link">Analytics</a>
        </div>
      </div>
      <div class="md:col-span-1 md:space-y-6 space-y-5 mx-auto">
        <h6 class="font-bold">Resources</h6>
        <div class="space-y-2 text-gray">
          <a href="#" class="footer-link">Blog</a>
          <a href="#" class="footer-link">Developers</a>
          <a href="#" class="footer-link">Support</a>
        </div>
      </div>
      <div class="md:col-span-1 md:space-y-6 space-y-5 mx-auto">
        <h6 class="font-bold">Company</h6>
        <div class="space-y-2 text-gray">
          <a href="#" class="footer-link">About</a>
          <a href="#" class="footer-link">Our Team</a>
          <a href="#" class="footer-link">Careers</a>
          <a href="#" class="footer-link">Contact</a>
        </div>
      </div>
      <div class="md:col-span-1 md:space-y-6 space-y-5 mx-auto">
        <div class="flex gap-6">
          <!-- <img :src="facebookLogo" alt="facebook_logo" class="logo-icon" /> -->
          <FacebookIcon hoverColor="#2acfcf" />
          <InstagramIcon hoverColor="#2acfcf" />
          <PinterestIcon hoverColor="#2acfcf" />
          <TwitterIcon hoverColor="#2acfcf" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  display: block;
  font-weight: 500;
  /* cursor: pointer; */
}

.footer-link:hover {
  color: var(--cyan);
}
</style>
