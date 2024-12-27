<script setup lang="ts">
import LucideIcon from '@/components/LucideIcon.vue'
import SubcategoryCard from '@/components/SubcategoryCard.vue'
import { WordCategories, type Category } from '@/data/categories'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const category = ref<Category | null>(null)

const routeName = route.params.category as string
category.value = WordCategories.find((cat) => cat.path === routeName) ?? WordCategories[0]
</script>

<template>
  <div>
    <h1 class="text-center fw-bold text-lowercase">
      <LucideIcon :name="category!!.icon" :size="42" class="align-text-top" /> {{ category!!.name }}
    </h1>
    <section>
      <!-- Subcategory Picker -->
      <div class="row">
        <SubcategoryCard
          class="col m-2"
          v-for="subcat in category!!.subcategories"
          :subcategory="subcat"
          :key="subcat.name"
        />
      </div>
    </section>
    <section>
      <!-- Word List -->
    </section>
  </div>
</template>
