import { onBeforeUnmount, onMounted, ref } from "vue";

export function useScreenSize() {
  const isDesktop = ref<boolean>(false);

  const checkScreenSize = (): void => {
    isDesktop.value = window.innerWidth > 768;
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkScreenSize);
  });

  return { isDesktop };
}
