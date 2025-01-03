//./plugins/posthog.js
import posthog from 'posthog-js'
import type { App } from 'vue'

export default {
  install(app: App) {
    app.config.globalProperties.$posthog = posthog.init(
      'phc_BrfRxNDklIQEZmAK27UZ2PAdnMHjCBPKRB3fWtOsF9c',
      {
        api_host: 'https://us.i.posthog.com',
      },
    )
  },
}
