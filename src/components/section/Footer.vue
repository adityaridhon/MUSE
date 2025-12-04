<script setup>
const menu = [
  { name: "Beranda", link: "/" },
  { name: "Tentang", link: "/tentang" },
  { name: "Galeri", link: "/galeri" },
  { name: "Layanan", link: "/layanan" },
  { name: "Kontak", link: "/kontak" },
];
</script>

<template>
  <footer class="border-t w-full border-t-primary py-12 shadow-2xl">
    <div
      class="container mx-auto px-4 flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-center max-w-6xl"
    >
      <div class="logo flex flex-col md:flex-row items-center gap-4">
        <img src="/logo.svg" alt="Logo-footer" width="80" />
        <h1 class="text-3xl font-bold text-primary">MUSE</h1>
      </div>

      <nav class="w-full md:w-auto">
        <ul
          class="menu flex flex-col gap-2 font-medium text-md text-center mt-6 md:mt-0 md:text-right"
        >
          <h2 class="font-semibold font-title">NAVIGASI</h2>
          <li v-for="(item, index) in menu" :key="index">
            <RouterLink
              :to="item.link"
              class="text-gray hover:text-primary transition-colors duration-300"
              active-class="text-primary "
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex justify-center border-t border-t-gray w-4/5 mx-auto mt-8">
      <p class="text-center text-sm text-gray mt-4">
        &copy; 2025 Aditya Ridho. All rights reserved.
      </p>
    </div>
  </footer>
</template>
