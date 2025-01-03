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
      <div class="row g-3">
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-2"
          >
            <span>Made with</span>
            <div class="d-flex align-items-center">
              <GitHubCopilotIcon
                style="width: 18px; height: 18px; margin: 0 4px; vertical-align: middle"
              />
              <VueDotjsIcon
                style="width: 18px; height: 18px; margin: 0 4px; vertical-align: middle"
              />
              <BootstrapIcon
                style="width: 18px; height: 18px; margin: 0 4px; vertical-align: middle"
              />
              <TypeScriptIcon
                style="width: 18px; height: 18px; margin: 0 4px; vertical-align: middle"
              />
            </div>
            <span>by</span>
            <a
              href="https://championswimmer.in"
              target="_blank"
              class="fw-bold text-decoration-none text-dark"
            >
              @championswimmer
            </a>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <ul class="list-inline mb-0 d-flex justify-content-center justify-content-md-end gap-3">
            <li class="list-inline-item">
              <a
                href="https://github.com/championswimmer/localise.travel-vue-pwa"
                target="_blank"
                class="text-decoration-none text-dark d-inline-flex align-items-center"
              >
                <GitHubIcon
                  style="width: 18px; height: 18px; margin: 0 4px; vertical-align: middle"
                />
                <span>Source</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://twitter.com/championswimmer"
                target="_blank"
                class="text-decoration-none text-dark d-inline-flex align-items-center"
              >
                <XIcon style="width: 18px; height: 18px; margin: 0 4px; vertical-align: middle" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
