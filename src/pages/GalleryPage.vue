<script setup>
import HeaderSection from "@/components/ui/HeaderSection.vue";
import GallerySection from "@/components/section/GallerySection.vue";
</script>

<template>
  <section>
    <HeaderSection
      title="Galeri"
      description="Momen yang terabadikan bersama kami"
      background-image="/header/header-galeri.webp"
    />
    <div>
      <GallerySection />
    </div>
  </section>
</template>
