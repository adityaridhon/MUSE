<template>
    <div class="text-center mt-10">
       <h3 class="text-gray text-sm md:text-lg">Klien</h3>
    <h1 class="font-title text-primary text-2xl md:text-4xl font-bold mb-4">
      Partner Kami
    </h1>
        <Vue3Marquee :pause-on-hover="true">
            <div class="card" v-for="LogoLuar in LogoLuar" :key="LogoLuar">
            <img :src="LogoLuar" width="120" class="mx-10" alt="partner-luar"/>
            </div>
        </Vue3Marquee  />
        <Vue3Marquee :pause-on-hover="true" :direction="'reverse'">
            <div class="card" v-for="LogoDalam in LogoDalam" :key="LogoDalam">
            <img :src="LogoDalam" width="120" class="mx-10 mt-10" alt="partner-dalam"/>
            </div>
        </Vue3Marquee>
    </div>
</template>

<script setup>
const LogoLuar = [
  "/partner/luar/1.png",
  "/partner/luar/2.png",
  "/partner/luar/3.png",
  "/partner/luar/6.png",
  "/partner/luar/4.png",
  "/partner/luar/5.png",
  "/partner/luar/6.png",
];

const LogoDalam = [
  "/partner/dalam/1.png",
  "/partner/dalam/5.png",
  "/partner/dalam/2.png",
  "/partner/dalam/5.png",
  "/partner/dalam/3.png",
  "/partner/dalam/4.png",
  "/partner/dalam/5.png",
];
</script>
