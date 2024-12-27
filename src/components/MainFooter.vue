<script setup lang="ts">
import {
  GitHubIcon,
  GitHubCopilotIcon,
  XIcon,
  VueDotjsIcon,
  BootstrapIcon,
  TypeScriptIcon,
} from 'vue3-simple-icons'
</script>

<template>
  <footer class="footer mt-auto py-4 bg-light">
    <div class="row px-4">
      <div class="col-auto fw-medium">
        Made with
        <GitHubCopilotIcon :size="18" class="align-text-top" />
        <VueDotjsIcon :size="18" class="align-text-top" />
        <BootstrapIcon :size="18" class="align-text-top" />
        <TypeScriptIcon :size="18" class="align-text-top" />
        by
        <a href="https://championswimmer.in" target="_blank">@championswimmer</a>
      </div>
      <div class="col-auto ms-auto">
        <ul class="list-unstyled">
          <li class="list-item">
            <a
              href="https://github.com/championswimmer/localise.travel-vue-pwa"
              target="_blank"
              class="text-decoration-none"
            >
              <GitHubIcon :size="18" class="align-text-top" />
              Source
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://twitter.com/championswimmer" class="text-decoration-none">
              <XIcon :size="18" class="align-text-top" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
