<script setup>
import { BadgeCheck, X } from 'lucide-vue-next';
import Button from "@/components/ui/Button.vue";
const props = defineProps({
  show: Boolean,
  title: String,
  message: String,
})

const emit = defineEmits(["close"])
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
  >
    <div class="bg-white p-6 rounded-xl shadow-lg w-80 text-center relative">
    <BadgeCheck class="mx-auto size-15 text-primary animate-bounce mt-4 mb-1"/>
      <h2 class="text-xl font-semibold capitalize text-primary mb-2">{{ title }}</h2>
      <p class="text-sm text-gray-600">{{ message }}</p>

      <Button
        @click="emit('close')"
        class="absolute top-3 right-3"
        size="sm"
        variant="ghost"
      >
        <X/>
      </Button>
    </div>
  </div>
</template>
