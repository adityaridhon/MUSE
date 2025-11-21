<script setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "white"].includes(value),
  },
});

const testimonial = ref([
  { angka: "80+", title: "Musisi", description: "pernah rekaman disini" },
  { angka: "5", title: "Studio", description: "dengan kualitas premium" },
  { angka: "10+", title: "Event", description: "terlaksana" },
  { angka: "25+", title: "Album", description: "dirilis" },
]);
const animatedNumbers = ref(testimonial.value.map(() => "0"));

// Computed classes berdasarkan variant warnanye
const containerClasses = computed(() => {
  return props.variant === "primary"
    ? "bg-primary text-white"
    : "bg-white text-primary";
});

const numberClasses = computed(() => {
  return props.variant === "primary" ? "text-white" : "text-primary";
});

function animateNumber(index, target) {
  const finalNumber = parseInt(target);
  let count = 0;
  const interval = setInterval(() => {
    animatedNumbers.value[index] = Math.floor(Math.random() * 100);

    count++;

    if (count > 15) {
      clearInterval(interval);

      let current = 0;
      const step = Math.ceil(finalNumber / 20);
      const smooth = setInterval(() => {
        current += step;
        if (current >= finalNumber) {
          current = finalNumber;
          clearInterval(smooth);
        }
        animatedNumbers.value[index] =
          current + (target.includes("+") ? "+" : "");
      }, 50);
    }
  }, 60);
}

onMounted(() => {
  testimonial.value.forEach((item, i) => {
    animateNumber(i, item.angka);
  });
});
</script>

<template>
  <div class="pt-12 md:pt-0">
    <div class="main" :class="containerClasses">
      <div
        class="content grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6"
      >
        <div
          v-for="(item, i) in testimonial"
          :key="i"
          class="flex flex-col justify-center text-center py-10"
        >
          <h2
            class="font-title font-semibold text-2xl md:text-3xl transition-all duration-500"
            :class="numberClasses"
          >
            {{ animatedNumbers[i] }}
          </h2>
          <h3 class="font-bold text-2xl">{{ item.title }}</h3>
          <p class="text-base">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
