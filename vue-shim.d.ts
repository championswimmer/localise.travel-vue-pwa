import { PostHog } from 'posthog-js'
declare module 'vue' {
  export interface ComponentCustomProperties {
    $posthog: PostHog
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}
