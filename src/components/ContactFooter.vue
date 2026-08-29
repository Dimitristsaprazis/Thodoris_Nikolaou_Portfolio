<script setup>
import { profile, socialLinks } from '../data/portfolio'
</script>

<template>
  <footer id="contact" class="border-t border-border bg-primary text-on-primary">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-on-primary/70">Contact</p>
        <h2 class="mt-3 font-heading text-3xl font-bold">Let’s turn data into action</h2>
      </div>

      <div class="flex flex-col gap-3 text-sm md:items-end">
        <a :href="`mailto:${profile.contactEmail}`" class="font-medium text-on-primary hover:text-accent">
          {{ profile.contactEmail }}
        </a>
        <div class="flex flex-wrap gap-4 md:justify-end">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="text-on-primary/80 transition hover:text-on-primary"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
