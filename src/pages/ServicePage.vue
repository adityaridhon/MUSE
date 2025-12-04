<script setup>
import HeaderSection from "@/components/ui/HeaderSection.vue";
import ServiceCard from "@/components/ui/ServiceCard.vue";
import { services } from "@/data/services";
</script>

<template>
  <section>
    <HeaderSection
      title="Layanan Kami"
      description="Layanan yang kami sediakan"
      background-image="/header/header-layanan.webp"
    />
    <div class="max-w-6xl mx-auto px-6 py-16">
      <h3 class="text-gray text-sm md:text-lg text-center">Layanan</h3>

      <h1
        class="font-title text-primary text-2xl md:text-4xl font-bold mb-8 text-center"
      >
        Mulai Bersama Kami
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
        <ServiceCard
          v-for="(service, i) in services"
          :key="i"
          v-bind="service"
        />
      </div>
    </div>
  </section>
</template>
