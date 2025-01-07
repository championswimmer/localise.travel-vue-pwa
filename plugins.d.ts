import { PostHog } from 'posthog-js'
declare module 'vue' {
  export interface ComponentCustomProperties {
    $posthog: PostHog
  }
}
