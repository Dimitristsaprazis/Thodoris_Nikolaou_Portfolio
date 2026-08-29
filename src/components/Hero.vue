<script setup>
import { profile } from '../data/portfolio'
</script>

<template>
  <section class="relative overflow-hidden bg-bg">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(17,17,17,0.05),transparent_38%)]"></div>

    <div class="relative mx-auto flex max-w-6xl flex-col-reverse gap-10 px-6 py-14 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:pt-[9rem] lg:pb-20">
      <div class="hero-copy max-w-xl">
        <p class="mb-5 inline-flex rounded-full border border-border bg-surface px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-text shadow-soft">
          Data Analyst
        </p>

        <h1 class="font-heading text-4xl font-bold tracking-[-0.06em] text-text md:text-6xl">
          {{ profile.name }}
        </h1>

        <p class="mt-4 text-lg font-medium text-secondary md:text-xl">
          {{ profile.title }}
        </p>

        <p class="mt-6 text-base leading-7 text-muted md:text-lg">
          {{ profile.pitch }}
        </p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            :href="profile.cvUrl"
            class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-secondary"
          >
            Download CV
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            Contact me
          </a>
        </div>
      </div>

      <div class="relative w-full max-w-md">
        <div class="hero-media relative overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-soft">
          <div class="overflow-hidden rounded-[1.5rem] border border-border bg-primary">
            <img
              :src="profile.image"
              :alt="profile.name"
              class="h-[420px] w-full object-cover grayscale transition-transform duration-500 ease-out hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
