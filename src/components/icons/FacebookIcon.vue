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
      d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
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
