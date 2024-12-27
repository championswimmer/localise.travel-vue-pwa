<script setup lang="ts">
import type { TranslatedWords, Translation } from '@/data/words'
import { useLangStore } from '@/stores/lang'
import { Volume2, AudioLines } from 'lucide-vue-next'

const props = defineProps<{
  word: string
  translation: Translation
}>()

const langStore = useLangStore()

const pronounce = () => {
  setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(props.translation.translation)
    utterance.lang = langStore.lang
    utterance.rate = 0.7
    window.speechSynthesis.speak(utterance)
  }, 100)
}
</script>

<template>
  <BCard class="my-3">
    <BCardBody class="p-2">
      <div class="row">
        <div class="col me-auto">
          <h2 class="card-title fs-5 fw-medium text-dark-emphasis">{{ props.word }}</h2>
          <p class="card-text fs-4 fw-light text-primary mb-0">
            {{ props.translation.translation }}
          </p>
          <p class="card-text fs-6 fw-light text-primary-emphasis">
            <AudioLines :size="18" :stroke-width="1" /> {{ props.translation.phonetic }}
          </p>
        </div>
        <div class="col-1" @click="pronounce()">
          <Volume2 class="mt-4" :size="32" />
        </div>
      </div>
    </BCardBody>
  </BCard>
</template>
