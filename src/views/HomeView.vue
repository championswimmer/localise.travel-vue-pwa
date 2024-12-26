<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue'
import { Globe } from 'lucide-vue-next'
import { WordCategories } from '@/data/categories'
</script>

<template>
  <main>
    <header>
      <h1 class="text-center fw-bold fs-3 my-2">
        speak like <span class="bg-primary-subtle px-1">locals</span> when
        <span class="bg-secondary-subtle px-1">travelling</span>
      </h1>
      <div class="text-center">select the language of the destination you are travelling to</div>
      <div class="text-center">then pick a category to discover essential words and phrases</div>
    </header>
    <section class="container mt-4">
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5 g-4">
        <CategoryCard
          v-for="category of WordCategories"
          :category="category"
          :key="category.name"
        />
      </div>
    </section>
  </main>
</template>
