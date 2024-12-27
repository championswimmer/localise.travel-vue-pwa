<script setup lang="ts">
import type { Subcategory } from '@/data/categories'
import { BCardTitle } from 'bootstrap-vue-next'
import LucideIcon from './LucideIcon.vue'

const props = defineProps<{
  subcategory: Subcategory
}>()
</script>

<template>
  <BCard>
    <BCardTitle class="fs-5 fw-semibold text-lowercase">
      <LucideIcon :name="subcategory.icon" :size="24" :width="2.5" />
      {{ subcategory.name }}
    </BCardTitle>
  </BCard>
</template>
