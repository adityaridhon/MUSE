<script setup>
import HeaderSection from "@/components/ui/HeaderSection.vue";
import Testimonial from "@/components/ui/Testimonial.vue";
import AboutCard from "@/components/ui/AboutCard.vue";
</script>

<template>
  <section>
    <HeaderSection
      title="Tentang Kami"
      background-image="/About.jpg"
      description="Lebih dekat dengan kami untuk meningkatkan kepercayaan anda!"
    />
    <div class="py-12 mx-10 md:mx-24">
      <h1 class="text-center text-2xl md:text-4xl font-semibold mb-4">
        Ciptakan suasana hangat dalam
        <span class="font-bold text-primary">Bermusik</span>
      </h1>
      <p class="text-gray text-sm md:text-base text-center">
        Kami memulai MUSE dengan tujuan menciptakan suasana bermusik yang
        hangat, ceria, kondusif dan tentunya berkualitas untuk dinikmati musisi
        atau calon musisi dari seluruh kalangan.
      </p>
      <Testimonial variant="white" />
      <AboutCard />
    </div>
  </section>
</template>
