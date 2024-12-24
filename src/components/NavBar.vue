<script setup lang="ts">
import { BNavbar, BNavbarBrand, BNavbarNav, BNavItem } from 'bootstrap-vue-next'
import LucideIcon from '@/components/LucideIcon.vue'
</script>

<template>
  <BNavbar toggleable="lg">
    <BNavbarBrand href="#" class="fw-bold">
      <LucideIcon :name="'globe'" class="me-2 mb-1" :size="24" />
      localise.travel
    </BNavbarBrand>
    <BNavbarNav>
      <BNavItem to="/home">Home</BNavItem>
      <BNavItem to="/about">About</BNavItem>
      <BNavItem to="/contact">Contact</BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>
