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
    class="min-h-screen pt-24 flex flex-col lg:flex-row-reverse items-center justify-between wrapper gap-10 max-w-5xl mx-auto"
  >
    <div class="image">
      <img src="/Hero.png" alt="hero" width="380" />
    </div>
    <div class="caption flex flex-col gap-2 max-w-lg text-center lg:text-left">
      <h1 class="font-title font-bold text-5xl md:text-6xl mb-2">
        Jejakkan karyamu dengan <span class="text-primary">MUSE</span>
      </h1>
      <p class="text-md text-black mb-4">
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
