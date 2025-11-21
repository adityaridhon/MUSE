<script setup>
import Testimonial from "@/components/ui/Testimonial.vue";
import Button from "@/components/ui/Button.vue";
</script>

<template>
  <div class="wrapper mx-auto pt-24 max-w-6xl px-8" id="about">
    <div class="flex flex-col md:flex-row items-center md:items-start">
      <div class="img mb-12 flex justify-center">
        <img src="/About.jpg" alt="about" class="rounded-2xl w-96 md:w-280" />
      </div>
      <div
        class="caption flex-col items-center text-center md:items-start md:text-right md:ml-24"
      >
        <h3 class="text-gray text-sm md:text-lg">Tentang Kami</h3>
        <h1 class="font-title text-2xl md:text-4xl font-bold mb-4">
          Menciptakan suasana hangat dalam
          <span class="text-primary">bermusik</span>
        </h1>
        <p>
          Kami memulai
          <span class="text-primary font-bold underline">MUSE</span> dengan
          tujuan menciptakan suasana bermusik yang hangat, ceria, kondusif dan
          tentunya berkualitas untuk dinikmati musisi atau calon musisi dari
          seluruh kalangan.
        </p>
        <RouterLink to="/tentang">
          <Button variant="outline" class="mt-8">Lihat Selengkapnya</Button>
        </RouterLink>
      </div>
    </div>
  </div>
  <Testimonial variant="primary" />
</template>
