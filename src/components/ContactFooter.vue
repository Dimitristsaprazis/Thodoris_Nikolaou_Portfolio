<script setup>
import { profile, socialLinks } from '../data/portfolio'

const getIcon = (label) => {
  const base = 'h-4 w-4'

  switch (label) {
    case 'LinkedIn':
      return `<svg viewBox="0 0 24 24" fill="currentColor" class="${base}" aria-hidden="true"><path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.9V18H5.5V9.8Zm5.3 0h2.77v1.13h.04c.39-.73 1.34-1.5 2.76-1.5 2.95 0 3.5 1.94 3.5 4.47V18h-2.9v-16.3c0-1.9-.04-4.36-2.66-4.36-2.66 0-3.08 2.08-3.08 4.22V18h-2.9V9.8Z"/></svg>`
    case 'GitHub':
      return `<svg viewBox="0 0 24 24" fill="currentColor" class="${base}" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.09.68-.22.68-.48v-1.7c-2.76.6-3.34-1.32-3.34-1.32-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.88 1.52 2.3 1.08 2.86.82.09-.64.35-1.08.64-1.33-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.38-1.97 1.02-2.67-.1-.25-.44-1.28.1-2.67 0 0 .83-.26 2.74 1.02A9.5 9.5 0 0 1 12 6.7c.84 0 1.68.11 2.46.32 1.91-1.28 2.74-1.02 2.74-1.02.54 1.39.2 2.42.1 2.67.64.7 1.02 1.59 1.02 2.67 0 3.81-2.32 4.64-4.53 4.9.36.31.68.91.68 1.83v2.71c0 .26.18.58.69.48A9.8 9.8 0 0 0 12 2.2Z"/></svg>`
    case 'Email':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${base}" aria-hidden="true"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"/><path d="m5 7 7 6 7-6"/></svg>`
    default:
      return ''
  }
}
</script>

<template>
  <footer id="contact" class="border-t border-white/10 bg-bg py-16 sm:py-20">
    <div class="mx-auto max-w-6xl px-6 sm:px-8">
      <div class="rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">Contact</p>
            <h2 class="mt-3 font-heading text-3xl tracking-[-0.06em] text-white sm:text-5xl">Let’s talk.</h2>
          </div>

          <a
            :href="`mailto:${profile.contactEmail}`"
            class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Email me
          </a>
        </div>

        <div class="mt-8 flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm text-white/60">© {{ new Date().getFullYear() }} {{ profile.name }}</p>

          <div class="flex items-center gap-3">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/70 transition hover:border-white/20 hover:text-white"
              target="_blank"
              rel="noreferrer"
              :aria-label="link.label"
            >
              <span v-html="getIcon(link.label)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
