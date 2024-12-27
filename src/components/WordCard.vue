<script setup lang="ts">
import type { TranslatedWords, Translation } from '@/data/words'

const props = defineProps<{
  word: string
  translation: Translation
}>()
</script>

<template>
  <BCard class="my-2">
    <BCardBody>
      <h2 class="card-title fs-5 fw-medium text-dark-emphasis">{{ props.word }}</h2>
      <p class="card-text fs-4 fw-light text-primary-emphasis">
        {{ props.translation.translation }}
      </p>
    </BCardBody>
  </BCard>
</template>
