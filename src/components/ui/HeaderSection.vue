<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  backgroundImage: {
    type: String,
    default: "/default-bg.jpg",
  },
});
</script>

<template>
  <header
    class="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center h-115 pt-20"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1
          class="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 leading-tight"
        >
          {{ title }}
        </h1>

        <p
          v-if="description"
          class="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed mx-auto"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </header>
</template>
