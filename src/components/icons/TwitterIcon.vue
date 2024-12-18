<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    class="icon-hover"
  >
    <path
      :fill="currentColor"
      d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
    />
  </svg>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref, computed } from "vue";

interface IconProps {
  fill?: string;
  hoverColor?: string;
  width?: number | string;
  height?: number | string;
}

// Define props with default values and type safety
const props = withDefaults(defineProps<IconProps>(), {
  fill: "#FFF",
  hoverColor: "#f00",
  width: 24,
  height: 24,
});

const isHovered = ref(false);

// compute current color based on hover state
const currentColor = computed(() => (isHovered.value ? props.hoverColor : props.fill));

const onMouseEnter = () => {
  isHovered.value = true;
};

const onMouseLeave = () => {
  isHovered.value = false;
};
</script>

<style scoped>
.icon-hover {
  transition: fill 0.3s ease;
  cursor: pointer;
}
</style>
