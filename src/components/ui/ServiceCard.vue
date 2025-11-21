<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  image: String,
  price: String,
  unit: {
    type: String,
    default: "jam",
  },
  title: String,
  description: String,
  features: {
    type: Array,
    default: () => [],
  },
  slug: {
    type: String,
    required: true,
  },
});

const goToDetail = () => {
  router.push(`/layanan/${props.slug}`);
};
</script>

<template>
  <div
    class="max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
    @click="goToDetail"
  >
    <img class="rounded-t-lg w-full object-cover" :src="image" :alt="title" />

    <div class="p-5 text-left">
      <p>
        Rp<span class="text-2xl font-bold font-title">{{ price }}</span
        >/{{ unit }}
      </p>

      <h5
        class="mb-2 text-2xl font-bold tracking-tight font-title text-primary"
      >
        {{ title }}
      </h5>

      <p class="mb-3 font-normal text-gray">
        {{ description }}
      </p>

      <div class="border border-gray"></div>

      <ul class="my-4 list-disc list-inside text-black">
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>
