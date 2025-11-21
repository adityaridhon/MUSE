<script setup>
const aboutData = [
  {
    id: 1,
    image: "/About.jpg",
    heading: "Visi Kami",
    description:
      "Menjadi studio musik terdepan yang menghadirkan kualitas audio premium dan memberikan pengalaman rekaman yang tak terlupakan bagi setiap musisi.",
  },
  {
    id: 2,
    image: "/About.jpg",
    heading: "Misi Kami",
    description:
      "Menyediakan layanan rekaman profesional dengan teknologi terkini, didukung oleh tim yang berpengalaman untuk membantu mewujudkan karya musik terbaik.",
  },
  {
    id: 3,
    image: "/About.jpg",
    heading: "Nilai Kami",
    description:
      "Komitmen terhadap kualitas, kreativitas, dan kepuasan klien adalah fondasi utama dalam setiap layanan yang kami berikan kepada para musisi.",
  },
];
</script>

<template>
  <div class="space-y-16 py-8">
    <div
      v-for="(item, index) in aboutData"
      :key="item.id"
      class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
      :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
    >
      <!-- Image Section -->
      <div class="w-full lg:w-1/2">
        <div class="relative overflow-hidden rounded-2xl shadow-xl group">
          <img
            :src="item.image"
            :alt="item.heading"
            class="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/25 hover:bg-black/10 transform transition-colors duration-300"
          ></div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="w-full lg:w-1/2 space-y-6">
        <div class="space-y-4">
          <h3 class="text-3xl lg:text-4xl font-bold text-black">
            {{ item.heading }}
          </h3>
          <div class="w-16 h-1 bg-linear-to-r bg-primary rounded-full"></div>
        </div>

        <p class="text-gray-600 text-lg leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
