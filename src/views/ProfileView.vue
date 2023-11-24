<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      Open dialog
    </button>

    <ProfileModal :isOpen="isOpen" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProfileModal from '../components/ProfileModal.vue'

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}
function closeModal() {
  isOpen.value = false
}
</script>
