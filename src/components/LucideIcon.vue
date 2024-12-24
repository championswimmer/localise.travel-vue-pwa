<script setup lang="ts">
import { computed, type FunctionalComponent, type PropType } from 'vue'
import { Globe } from 'lucide-vue-next'
import type { Icon } from '@/data/icons'

const props = defineProps({
  name: {
    type: Object as PropType<Icon>,
    required: true,
  },
  size: Number,
  color: String,
  strokeWidth: Number,
  defaultClass: String,
})

const icons: { [iconName: string]: FunctionalComponent } = {
  globe: Globe,
}

const icon = computed(() => icons[props.name])
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>
