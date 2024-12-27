import type { LangCode } from '@/data/languages'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLangStore = defineStore('lang-select', () => {
  const lang = ref<LangCode>('fr')
  const setLang = (newLang: LangCode) => {
    lang.value = newLang
  }

  return { lang, setLang }
})
