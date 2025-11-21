<script setup>
import ServiceCard from "@/components/ui/ServiceCard.vue";
import { services } from "@/data/services";
import Button from "@/components/ui/Button.vue";
import { Music } from "lucide-vue-next";

const homeServices = services.slice(0, 3);
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-16" id="services">
    <h3 class="text-gray text-sm md:text-lg text-center">Layanan</h3>
    <h1
      class="font-title text-primary text-2xl md:text-4xl font-bold mb-8 text-center"
    >
      Mulai Bersama Kami
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
      <ServiceCard
        v-for="(service, i) in homeServices"
        :key="i"
        v-bind="service"
      />
    </div>
    <div class="flex justify-center mt-10">
      <RouterLink to="/layanan">
        <Button>Lihat lebih banyak <Music class="ml-2 size-5" /></Button>
      </RouterLink>
    </div>
  </section>
</template>
