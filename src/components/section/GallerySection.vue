<script setup>
const galleryItems = [
  {
    id: 1,
    src: "/galeri/galeri-1.webp",
    alt: "Gallery Image 1",
    class: "col-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 2,
    src: "/galeri/galeri-2.webp",
    alt: "Gallery Image 2",
    class: "col-span-1 md:col-span-3 md:row-span-2",
  },
  {
    id: 3,
    src: "/galeri/galeri-3.webp",
    alt: "Gallery Image 3",
    class: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: 4,
    src: "/galeri/galeri-4.webp",
    alt: "Gallery Image 4",
    class: "col-span-1 md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    src: "/galeri/galeri-5.webp",
    alt: "Gallery Image 5",
    class: "col-span-1 md:col-span-3 md:row-span-2",
  },
  {
    id: 6,
    src: "/galeri/galeri-6.webp",
    alt: "Gallery Image 6",
    class: "col-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 7,
    src: "/galeri/galeri-7.webp",
    alt: "Gallery Image 7",
    class: "col-span-2 md:row-span-1",
  },
];
</script>

<template>
  <div class="wrapper mx-auto py-14 max-w-6xl px-8 text-center">
    <h3 class="text-gray text-sm md:text-lg">Galeri</h3>
    <h1 class="font-title text-primary text-2xl md:text-4xl font-bold mb-4">
      Momen Bersama Kami
    </h1>

    <div class="grid grid-cols-2 md:grid-cols-6 auto-rows-[150px] gap-3 p-4">
      <div
        v-for="item in galleryItems"
        :key="item.id"
        :class="`${item.class} rounded-lg overflow-hidden relative group`"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm md:text-lg font-semibold"
        ></div>
      </div>
    </div>
  </div>
</template>
