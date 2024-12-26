<script setup lang="ts">
import { BNavbar, BNavbarBrand, BNavbarNav, BNavItem } from 'bootstrap-vue-next'
import { Globe, Languages, Footprints } from 'lucide-vue-next'
</script>

<template>
  <BNavbar toggleable="lg">
    <BNavbarBrand href="#" class="fw-bold">
      <Globe class="me-2 mb-1" :size="24" />
      <Footprints class="me-2 mb-1" :size="24" />
      <Languages class="me-2 mb-1" :size="24" />
      localise.travel
    </BNavbarBrand>
    <BNavbarNav>
      <BNavItem to="/home">Home</BNavItem>
      <BNavItem to="/about">About</BNavItem>
      <BNavItem to="/contact">Contact</BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>
