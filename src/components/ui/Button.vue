<script setup>
import { computed } from "vue";

// props dasar
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
  as: {
    type: String,
    default: "button",
  },
});

// base style
const base =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

// variasi warna
const variants = {
  default:
    "bg-primary/90 text-white border-transparent hover:bg-primary/100 focus-visible:ring-primary/50",
  outline:
    "border border-primary text-primary bg-transparent hover:bg-primary/100 hover:text-white focus-visible:ring-primary/50",
  ghost:
    "bg-transparent text-primary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#00000040]",
  destructive: "bg-red-600 text-white hover:bg-red-700 ",
};

// variasi ukuran tombol
const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 rounded-md text-sm",
  lg: "h-11 px-8 text-base",
  icon: "h-10 w-10",
};

// semua gaubung
const buttonClass = computed(() => {
  return `${base} ${variants[props.variant] || variants.default} ${
    sizes[props.size] || sizes.default
  }`;
});
</script>

<template>
  <component :is="as" :class="buttonClass">
    <slot />
  </component>
</template>
