<script setup lang="ts">
import { AppLanguages, type LangCode } from '@/data/languages'
import { useLangStore } from '@/stores/lang'
import { BListGroup, BModal } from 'bootstrap-vue-next'
import { Check } from 'lucide-vue-next'

const langStore = useLangStore()

const selectLanguage = (lang: LangCode) => {
  langStore.setLang(lang)
  // langStore.selector = false
}
</script>

<template>
  <BModal
    centered
    v-model="langStore.selector"
    id="modal-language-selector"
    title="Select Language"
    @cancel="langStore.selector = false"
    @ok="langStore.selector = false"
  >
    <BListGroup>
      <BListGroupItem
        :class="{ 'bg-success-subtle': langStore.lang === lang.code }"
        v-for="lang of AppLanguages"
        :key="lang.code"
        @click="selectLanguage(lang.code)"
      >
        {{ lang.emoji }}
        <span class="text-primary fw-medium">
          {{ lang.name }}
        </span>
        <span class="text-secondary fw-light"> ( {{ lang.name_en }} ) </span>
        <Check
          :stroke-width="3"
          v-if="langStore.lang === lang.code"
          class="text-success float-end"
        />
      </BListGroupItem>
    </BListGroup>
  </BModal>
</template>
