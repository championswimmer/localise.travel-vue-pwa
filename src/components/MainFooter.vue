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
  <footer class="footer mt-auto py-4 bg-light border-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-auto fw-medium text-center text-md-start mb-2 mb-md-0">
          Made with
          <GitHubCopilotIcon :size="18" class="align-text-top text-primary mx-1" />
          <VueDotjsIcon :size="18" class="align-text-top text-success mx-1" />
          <BootstrapIcon :size="18" class="align-text-top text-info mx-1" />
          <TypeScriptIcon :size="18" class="align-text-top text-blue mx-1" />
          by
          <a
            href="https://championswimmer.in"
            target="_blank"
            class="fw-bold text-decoration-none text-dark"
          >
            @championswimmer
          </a>
        </div>
        <div class="col-md-auto ms-md-auto text-center text-md-end">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a
                href="https://github.com/championswimmer/localise.travel-vue-pwa"
                target="_blank"
                class="text-decoration-none"
              >
                <GitHubIcon :size="18" class="align-text-top text-dark" />
                <span class="ms-1">Source</span>
              </a>
            </li>
            <li class="list-inline-item ms-3">
              <a
                href="https://twitter.com/championswimmer"
                class="text-decoration-none"
                target="_blank"
              >
                <XIcon :size="18" class="align-text-top text-dark" />
                <span class="ms-1">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
