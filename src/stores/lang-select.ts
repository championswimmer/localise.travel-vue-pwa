export const useLangSelect = defineStore('lang-select', () => {
  const lang = ref('fr')
  const setLang = (newLang: string) => {
    lang.value = newLang
  }

  return { lang, setLang }
})
