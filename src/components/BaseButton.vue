<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonVariant = "primary" | "secondary" | "danger" | "success";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  outline?: boolean;
  class?: string;
}

// Define props with typescript
const props = withDefaults(defineProps<ButtonProps>(), {
  label: "Button",
  variant: "primary",
  size: "md",
  disabled: false,
  outline: false,
  class: "",
});

// Define typed emit event
const emit = defineEmits<{ (e: "click", event: MouseEvent): void }>();

const buttonClasses = computed(() => {
  const baseClasses: string[] = [
    "font-semibold",
    "rounded-3xl",
    "transition-all",
    "duration-300",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "bg-cyan",
  ];

  const variantClasses = {
    primary: props.outline
      ? "text-cyan border-2 border-cyan hover:bg-cyan hover:text-white"
      : "bg-cyan text-white hover:bg-[hsl(180,66%,60%)]",
    secondary: props.outline
      ? "text-gray-600 border-2 border-gray-600 hover:bg-gray-600 hover:text-white"
      : "bg-gray-600 text-white hover:bg-gray-700",
    danger: props.outline
      ? "text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white"
      : "bg-red-600 text-white hover:bg-red-700",
    success: props.outline
      ? "text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white"
      : "bg-green-600 text-white hover:bg-green-700",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base",
  };

  const disabledClasses = props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return [...baseClasses, variantClasses[props.variant], sizeClasses[props.size], disabledClasses, props.class];
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>

<style scoped></style>
