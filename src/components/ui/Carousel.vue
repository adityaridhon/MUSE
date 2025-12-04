<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

// Props untuk gamber
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});

const currentSlide = ref(0);
let intervalId = null;

const totalSlides = computed(() => props.images.length);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startAutoPlay = () => {
  intervalId = setInterval(nextSlide, 3000);
};

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <div
    id="default-carousel"
    class="relative w-full"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-2xl md:h-96">
      <!-- Carousel Items -->
      <div
        v-for="(image, index) in props.images"
        :key="index"
        :class="[
          'duration-700 ease-in-out transition-opacity absolute inset-0',
          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0',
        ]"
      >
        <img
          :src="image"
          class="w-full h-full object-cover"
          :alt="`Slide ${index + 1}`"
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
    >
      <button
        v-for="(image, index) in props.images"
        :key="index"
        type="button"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75',
        ]"
        :aria-current="index === currentSlide"
        :aria-label="`Slide ${index + 1}`"
        @click="goToSlide(index)"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="prevSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none transition-all duration-300"
      >
        <svg
          class="w-5 h-5 text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="nextSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none transition-all duration-300"
      >
        <svg
          class="w-5 h-5 text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 5 7 7-7 7"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>
