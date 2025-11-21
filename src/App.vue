<script setup>
import Navbar from "@/components/ui/Navbar.vue";
import Footer from "@/components/section/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-black">
    <Navbar />

    <main class="flex-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
