import type { LangCode } from '@/data/languages'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLangStore = defineStore(
  'lang-select',
  () => {
    const selector = ref<boolean>(false)
    const toggleSelector = () => {
      selector.value = !selector.value
    }

    const lang = ref<LangCode>('fr')
    const setLang = (newLang: LangCode) => {
      lang.value = newLang
    }

    return { lang, setLang, selector, toggleSelector }
  },
  {
    persist: {
      pick: ['lang'],
    },
  },
)
