<script setup lang="ts">
import { AppLanguages } from '@/data/languages'
import { useLangStore } from '@/stores/lang'
import { BNavbar, BNavbarBrand, BNavbarNav, BNavForm, BNavItem } from 'bootstrap-vue-next'
import { Globe, Languages, Footprints, SlidersHorizontal } from 'lucide-vue-next'
import { computed ,  ref, onMounted, onUnmounted} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const langStore = useLangStore()

const currentLang = computed(() => AppLanguages[langStore.lang!!])

const isMobile = ref(window.innerWidth < 768)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<template>
  <BNavbar toggleable="lg">
    <BNavbarBrand to="/" class="fw-bold">
      <Languages class="me-2 mb-1 text-primary" :size="24" />
      <Globe class="me-2 mb-1" :size="24" />
      <Footprints class="me-2 mb-1 text-secondary" :size="24" />
      <span class="text-primary">localise</span>.<span class="text-secondary">travel</span>
    </BNavbarBrand>
    <!-- <BNavbarNav>
      <BNavItem to="/home">Home</BNavItem>
      <BNavItem to="/about">About</BNavItem>
      <BNavItem to="/contact">Contact</BNavItem>
    </BNavbarNav> -->
    <BNavForm class="d-flex">
      <button class="btn btn-outline-secondary border-0" @click="langStore.toggleSelector">
        {{ currentLang.emoji }}
        <span v-if="!isMobile" class="fw-medium">{{ currentLang.name }}</span>
        <span v-if="!isMobile" class="fw-light">({{ currentLang.name_en }})</span>
      </button>
    </BNavForm>
  </BNavbar>
</template>
