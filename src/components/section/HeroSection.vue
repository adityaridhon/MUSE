<script setup>
import Button from "@/components/ui/Button.vue";
const handleSeeMoreClick = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <div
    class="pt-40 flex flex-col lg:flex-row-reverse items-center justify-between wrapper md:gap-10 gap-2 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-8"
  >
    <div class="image">
      <img src="/Hero.png" alt="hero" class="w-80 md:w-100" />
    </div>
    <div class="caption flex flex-col gap-2 max-w-lg text-center lg:text-left">
      <h1 class="font-title font-bold text-4xl md:text-6xl mb-2">
        Jejakkan karyamu dengan <span class="text-primary">MUSE</span>
      </h1>
      <p class="text-base text-black mb-4">
        Latihan, rekam karya, dan jamming bersama rekanmu di Muse sekarang!
      </p>
      <div class="flex items-center gap-4 mt-3 justify-center lg:justify-start">
        <RouterLink to="/layanan">
          <Button>Pesan</Button>
        </RouterLink>
        <Button variant="outline" @click="handleSeeMoreClick"
          >Lihat Selengkapnya</Button
        >
      </div>
    </div>
  </div>
</template>
