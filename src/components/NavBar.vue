<script setup lang="ts">
import { BNavbar, BNavbarBrand, BNavbarNav, BNavItem } from 'bootstrap-vue-next'
import { Globe, Languages, Footprints } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <BNavbar toggleable="lg">
    <BNavbarBrand to="/" class="fw-bold">
      <Languages class="me-2 mb-1 text-primary" :size="24" />
      <Globe class="me-2 mb-1" :size="24" />
      <Footprints class="me-2 mb-1 text-secondary" :size="24" />
      <span class="text-primary">localise</span>.<span class="text-secondary">travel</span>
    </BNavbarBrand>
    <BNavbarNav>
      <BNavItem to="/home">Home</BNavItem>
      <BNavItem to="/about">About</BNavItem>
      <BNavItem to="/contact">Contact</BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>
