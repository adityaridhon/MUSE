<template>
    <div class="text-center mt-10">
       <h3 class="text-gray text-sm md:text-lg">Klien</h3>
    <h1 class="font-title text-primary text-2xl md:text-4xl font-bold mb-4">
      Partner Kami
    </h1>
        <Vue3Marquee :pause-on-hover="true">
            <div class="card" v-for="LogoLuar in LogoLuar" :key="LogoLuar">
            <img :src="LogoLuar" width="120" class="mx-10" />
            </div>
        </Vue3Marquee  />
        <Vue3Marquee :pause-on-hover="true" :direction="'reverse'">
            <div class="card" v-for="LogoDalam in LogoDalam" :key="LogoDalam">
            <img :src="LogoDalam" width="120" class="mx-10 mt-10" />
            </div>
        </Vue3Marquee>
    </div>
</template>

<script setup>
const LogoLuar = [
  "https://www.nicepng.com/png/full/319-3197453_blink-blink-182-logo-png.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_ZwVQlMwfETVB5NtiiIePzYkt4eVyoaZyA&s",
  "https://upload.wikimedia.org/wikipedia/commons/7/74/Simple_Plan_logo.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4cYgkUosqbCPiEGSTUAJ5qY9slIWWrWlhQ&s",
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Paramore_logo_2.png",
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/My_Chemical_Romance_logo.png",
  "https://i.namu.wiki/i/sMzJtgjs707F-CJjBarfTYO6BE_HZA1V1OdgkYI5DmfLW5Sv1xvTf_DCPho--8X8SPPfKkttSBMokpCQvxIVHA.webp"
];

const LogoDalam = [
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/Logo_Band_Noah.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc1jFXpKlsNIPqLkk_DS8stwvLIjkk2LFQin8uEDjnH5vAfpm74ptoX4UNYiAun7SHeW40k-fLz170qN4QxQKixxUPyo1L9xmliT1U3D1YRQqa1yaxd1Pw2L3tnYTfPri4WXD8YKu9fxQ/s2048/Logo+Slank.png",
  "https://bloguna.com/wp-content/uploads/2025/06/Logo-Sheila-on-7-Format-EPS-PNG-PSD-SVG-CDR-AI.webp",
  "https://pbs.twimg.com/profile_images/1314820568194019331/J66dJ7Vy_400x400.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_WMJ9z6W3j7Ha9heRiIyA68wgmVA_ht5rlXIl6s98ib-q4o8V_CfkktjyKltDzB5-xExNctKVYS5wAci-ECWKVndMsOS05H4-B-g6h9k09OAdWD2k56OBTsb-PAP78ba-qsNAKOoezfFjDInOEdWud3SxhDuys5ZcHPcaiYsOAxnfMml4IXLM-erW/s320/GKL21_The%20Changcuters%20-%20Koleksilogo.com.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OlrdoK1VpjGIJ-nbbrHdX4yHdKe0WonAjg&s",
  "https://bloguna.com/wp-content/uploads/2025/09/Logo-J-Rocks-Format-PNG.png"
];
</script>
