import type { LangCode } from '@/data/languages'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import posthog from 'posthog-js'

export const useLangStore = defineStore(
  'lang-select',
  () => {
    const selector = ref<boolean>(false)
    const toggleSelector = () => {
      selector.value = !selector.value
      Promise.resolve().then(() => {
        posthog.capture('toggle_language_selector', { open: selector.value })
      })
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
