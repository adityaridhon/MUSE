<script setup>
import { ref } from "vue";
import NavMenu from "@/components/ui/NavMenu.vue";

const menu = [
  { name: "Beranda", link: "/" },
  { name: "Tentang", link: "/tentang" },
  { name: "Galeri", link: "/galeri" },
  { name: "Layanan", link: "/layanan" },
  { name: "Kontak", link: "/kontak" },
];

// cek mbile menu
const isMobileMenuOpen = ref(false);

// Function toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Function tutup mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <nav class="fixed w-full bg-white border-b border-b-primary shadow-sm z-50">
    <div class="flex items-center justify-between px-4 md:px-10 py-4">
      <div class="logo flex items-center gap-3 md:gap-4">
        <img src="/logo.svg" alt="Logo" class="w-12 md:w-14" />
        <h2 class="font-title text-2xl md:text-4xl text-primary font-bold">
          MUSE
        </h2>
      </div>

      <!-- Desktop Menu  -->

      <div class="hidden lg:block">
        <NavMenu />
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        id="navbar"
        @click="toggleMobileMenu"
        class="lg:hidden relative flex flex-col items-center justify-center w-10 h-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-lg"
        :class="{ active: isMobileMenuOpen }"
      >
        <span
          class="absolute w-6 h-0.5 bg-primary transition-all duration-300 ease-in-out transform"
          :class="
            isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
          "
        ></span>
        <span
          class="absolute w-6 h-0.5 bg-primary transition-all duration-300 ease-in-out"
          :class="
            isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          "
        ></span>
        <span
          class="absolute w-6 h-0.5 bg-primary transition-all duration-300 ease-in-out transform"
          :class="
            isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
          "
        ></span>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      class="lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out"
      :class="
        isMobileMenuOpen
          ? 'max-h-screen opacity-100 visible'
          : 'max-h-0 opacity-0 invisible overflow-hidden'
      "
    >
      <div class="px-4 py-6">
        <nav @click="closeMobileMenu">
          <ul class="flex flex-col space-y-4">
            <li v-for="(item, index) in menu" :key="index">
              <RouterLink
                :to="item.link"
                class="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-primary hover:bg-purple-50 rounded-lg transition-all duration-200"
                active-class="text-primary bg-purple-100"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
