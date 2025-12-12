<script setup>
import ServiceCard from "@/components/ui/ServiceCard.vue";

const skills = [
  {
    slug: "ui-ux",
    image: "/layanan/studio-musik/studio-musik-1.webp",
    galeri: [
      "/layanan/studio-musik/studio-musik.webp",
      "/layanan/studio-musik/studio-musik-1.webp",
      "/layanan/studio-musik/studio-musik-2.webp",
    ],
    price: "150000",
    unit: "projek",
    title: "UI-UX Design",
    description: "Mengembangkan desain ui/ux",
    features: ["Design", "Prototyping"],
  },
  {
    slug: "front-end",
    image: "/layanan/studio-musik/studio-musik-2.webp",
    galeri: [
      "/layanan/studio-musik/studio-musik.webp",
      "/layanan/studio-musik/studio-musik-1.webp",
      "/layanan/studio-musik/studio-musik-2.webp",
    ],
    price: "500000",
    unit: "projek",
    title: "Front End Web Development",
    description: "Mengembangkan website front-end",
    features: ["Design", "Prototyping", "Development"],
  },
  {
    slug: "back-end",
    image: "/layanan/studio-musik/studio-musik.webp",
    galeri: [
      "/layanan/studio-musik/studio-musik.webp",
      "/layanan/studio-musik/studio-musik-1.webp",
      "/layanan/studio-musik/studio-musik-2.webp",
    ],
    price: "200000",
    unit: "projek",
    title: "Backend Development",
    description: "Membangun REST API",
    features: ["Design BE", "Membuat API"],
  },
];
</script>

<template>
  <section class="pt-40 pb-24 flex flex-col justify-center mx-8 px-6">
    <div
      class="wrap flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-30"
    >
      <div class="nama">
        <h1
          class="text-center md:text-left font-bold text-2xl md:text-5xl text-primary mb-2"
        >
          Aditya Ridho Nugroho
        </h1>
        <div
          class="detail-nama flex justify-center md:justify-start gap-2 text-gray text-sm"
        >
          <h2>11231003 |</h2>
          <h2>Informatika |</h2>
          <h2>Institut Teknologi Kalimantan</h2>
        </div>
        <p class="deskripsi mt-4 text-center md:text-left">
          Saya adalah mahasiswa informatika di Institut Teknologi Kalimantan
          yang sedang menjalaani perkuliahan semester 5. Saya memiliki minat
          yang tinggi di bidang UI/UX Design, Web Development dan Internet of
          Things.
        </p>
      </div>
      <div class="foto">
        <img
          src="/tentang-dev/adit.JPG"
          alt="ini adit"
          width="700"
          class="hidden md:block rounded-2xl"
        />
      </div>
    </div>
    <h1
      class="font-bold text-primary text-2xl md:text-4xl text-center md:mt-10"
    >
      Skill Saya
    </h1>
    <div
      class="skil grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-20 mt-7"
    >
      <ServiceCard v-for="(service, i) in skills" :key="i" v-bind="service" />
    </div>
  </section>
</template>
