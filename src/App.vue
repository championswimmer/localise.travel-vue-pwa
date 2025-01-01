<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ReloadPrompt from '@/components/ReloadPrompt.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />

    <main class="flex-shrink-0 mb-4">
      <RouterView />
    </main>
    <ReloadPrompt />
    <LanguageSelector />
    <MainFooter />
  </div>
</template>

<style scoped></style>
