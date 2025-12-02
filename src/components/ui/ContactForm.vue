<script setup>
import Button from "@/components/ui/Button.vue";
import Popup from "@/components/ui/Popup.vue";
import { ref } from "vue";
import { SendHorizontal } from "lucide-vue-next";


const showPopup = ref(false);

const submitForm = (e) => {
  e.preventDefault(); 

  showPopup.value = true;
};

</script>

<template>
  <div class="bg-white p-8 rounded-xl shadow">
    <form class="mx-auto" @submit="submitForm">
      <!-- IMput nama -->
      <div class="mb-5">
        <label for="nama" class="block mb-2 text-base font-medium text-black">
          Nama
        </label>
        <input
          type="text"
          id="nama"
          class="border border-gray-300 text-black text-xs md:text-sm rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary block w-full p-2.5 outline-none transition-all duration-200 ease-in-out"
          placeholder="Masukkan nama anda..."
          required
        />
      </div>

      <!-- Input email -->
      <div class="mb-5">
        <label for="email" class="block mb-2 text-base font-medium text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="border border-gray-300 text-black text-xs md:text-sm rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary block w-full p-2.5 outline-none transition-all duration-200 ease-in-out"
          placeholder="Masukkan email anda..."
          required
        />
      </div>

      <!-- Imput pesan -->
      <div class="mb-5">
        <label for="pesan" class="block mb-2 text-base font-medium text-black">
          Pesan
        </label>
        <textarea
          id="pesan"
          class="border border-gray-300 text-black text-xs md:text-sm rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary block w-full h-32 resize-none p-2.5 outline-none transition-all duration-200 ease-in-out"
          placeholder="Masukkan pesan, pertanyaan atau kritik anda..."
          required
        ></textarea>
      </div>
      <div class="flex w-full justify-center">
        <Button type="submit" size="sm">
          Kirim Pesan <SendHorizontal class="ml-2 size-4"
        /></Button>
      </div>
    </form>
  </div>
  <Popup
    :show="showPopup"
    title="Pesan Terkirim!"
    message="Terima kasih atas pesan anda, kami akan segera menanggapi!"
    @close="showPopup = false"
  />
</template>
