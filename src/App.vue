<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ReloadPrompt from '@/components/ReloadPrompt.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />

  <div class="container">
    <RouterView />
  </div>
  <ReloadPrompt />
</template>

<style scoped></style>
