import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        // TODO: add icons
        name: 'localise.travel - speak like locals while travelling',
        short_name: 'localise.travel',
        description: 'Speak like locals while travelling',
        start_url: '/',
      },
      mode: 'production', // TODO: use NODE_ENV
      devOptions: {
        enabled: false, // TODO: use NODE_ENV
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
