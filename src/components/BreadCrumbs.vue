<script setup lang="ts">
import { type BreadcrumbItem } from 'bootstrap-vue-next'
import { ref } from 'vue'

const props = defineProps<{
  route: string
}>()

const breadcrumbItems = ref<BreadcrumbItem[]>([
  { text: 'Home', to: { path: '/' } },
  { text: props.route },
])
</script>

<template>
  <BBreadcrumb :items="breadcrumbItems" class="m-3" />
</template>
