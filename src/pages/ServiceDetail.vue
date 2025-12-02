<script setup>
import { useRoute, useRouter } from "vue-router";
import { services } from "@/data/services.js";
import Button from "@/components/ui/Button.vue";
import { ArrowLeft, Check, ShoppingCart } from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;

const service = services.find((s) => s.slug === slug);

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <section class="py-32 mx-10" v-if="service">
    <div
      class="navigation flex items-center gap-4 mb-6 justify-between mx-0 md:mx-10"
    >
      <Button
        size="icon"
        @click="goBack"
        class="hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft />
      </Button>
      <h1 class="font-semibold text-xl">Detail {{ service.title }}</h1>
    </div>
    <div class="content flex md:flex-row flex-col gap-10 md:mx-10">
      <div class="gambar w-90 md:w-full lg:w-200 mx-auto">
        <img :src="service.image" :alt="service.title" class="rounded-lg" />
      </div>
      <div class="teks flex flex-col w-full">
        <div class="content-wrapper flex-1">
          <h1 class="text-3xl md:text-4xl font-bold text-primary">
            {{ service.title }}
          </h1>
          <p class="text-gray text-base md:text-lg mt-4">
            {{ service.description }}
          </p>
          <ul class="mt-6 space-y-3">
            <li
              v-for="(item, i) in service.features"
              :key="i"
              class="flex items-center gap-2"
            >
              <Check
                size="18"
                class="bg-primary rounded-full text-white p-0.5 font-semibold"
              />
              {{ item }}
            </li>
          </ul>
        </div>

        <div
          class="btn flex md:flex-row flex-col-reverse justify-between items-center mt-8 pt-6 border-t border-gray-200 w-full"
        >
          <Button class="flex items-center gap-2 w-full md:w-50">
            Pesan Sekarang <ShoppingCart />
          </Button>
          <div class="harga text-center md:text-right mb-4 md:mb-0">
            <p class="text-sm text-gray-500">Mulai dari</p>
            <h2 class="text-base font-semibold">
              Rp <span class="text-3xl text-primary">{{ service.price }}</span>
              <span class="text-gray-500">/{{ service.unit }}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="galeri"></div>
  </section>
  <div v-else>
    <p>Layanan tidak ditemukan.</p>
  </div>
</template>
