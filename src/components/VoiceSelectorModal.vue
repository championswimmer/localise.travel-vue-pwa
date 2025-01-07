<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BModal, BFormSelect } from 'bootstrap-vue-next'
import { useLangStore } from '@/stores/lang'
import { AppLanguages, type LangCode } from '@/data/languages'

const langStore = useLangStore()
const selectedVoices = ref<{ [key: string]: SpeechSynthesisVoice | null }>({})

const getVoicesForLang = (lang: LangCode) => {
  return window.speechSynthesis.getVoices().filter(voice => voice.lang.startsWith(lang))
}

const updateSelectedVoice = (lang: LangCode, voice: SpeechSynthesisVoice) => {
  selectedVoices.value[lang] = voice
  langStore.setVoice(lang, voice)
}

onMounted(() => {
  window.speechSynthesis.onvoiceschanged = () => {
    for (const lang of Object.keys(AppLanguages)) {
      selectedVoices.value[lang] = getVoicesForLang(lang as LangCode)[0] || null
    }
  }
})
</script>

<template>
  <BModal
    centered
    v-model="langStore.voiceSelector"
    id="modal-voice-selector"
    title="Select Voice"
    @cancel="langStore.voiceSelector = false"
    @ok="langStore.voiceSelector = false"
  >
    <div v-for="lang in Object.keys(AppLanguages)" :key="lang">
      <label :for="'voice-select-' + lang">{{ AppLanguages[lang].name }}</label>
      <BFormSelect
        :id="'voice-select-' + lang"
        v-model="selectedVoices[lang]"
        :options="getVoicesForLang(lang)"
        @change="updateSelectedVoice(lang, selectedVoices[lang])"
      />
    </div>
  </BModal>
</template>
