<script setup>
import { profile } from '../data/portfolio'

const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
</script>

<template>
  <section class="relative isolate overflow-hidden bg-bg text-text">
    <div class="pointer-events-none absolute inset-0 opacity-80">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_26%)]"></div>
    </div>

    <div
      class="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12"
    >
      <div class="hero-media relative order-1 flex justify-center lg:order-2 lg:justify-end">
        <div class="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[500px]">
          <div class="absolute inset-8 -z-10 rounded-[2rem] bg-white/10 blur-3xl"></div>

          <div class="relative rounded-[2.2rem] border border-white/10 bg-white/[0.02] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-md">
            <div class="absolute inset-2 rounded-[1.7rem] border border-white/15"></div>
            <div class="absolute -left-4 top-10 h-20 w-20 rounded-full border border-white/10 bg-white/5 blur-sm"></div>
            <div class="absolute -right-4 bottom-14 h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-sm"></div>

            <div class="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-black">
              <div class="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_30%,transparent_70%,rgba(255,255,255,0.08))]"></div>
              <div class="absolute inset-4 rounded-[1.4rem] border border-white/10"></div>
              <img
                :src="profile.image"
                alt="Portrait of Theodoros Nikolaou"
                class="relative h-[280px] w-full object-cover grayscale contrast-[1.15] saturate-0 sm:h-[360px] lg:h-[540px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="hero-copy order-2 flex flex-col items-start lg:order-1">
        <span class="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80">
          Data Analyst
        </span>

        <h1 class="max-w-xl font-heading text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
          {{ profile.name }}
        </h1>

        <p class="mt-5 max-w-xl text-lg font-medium text-white/70 sm:text-xl">
          {{ profile.title }}
        </p>

        <p class="mt-6 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
          {{ profile.pitch }}
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">SQL</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">Python</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">Power BI</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">Tableau</span>
        </div>

        <div class="mt-8 flex flex-wrap gap-4">
          <a
            class="cursor-button inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-black transition duration-200 hover:-translate-y-0.5 hover:bg-white/90"
            href="mailto:hello@nikolai-portfolio.com"
          >
            Let’s talk
          </a>
          <a
            class="cursor-button inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/5"
            :href="profile.cvUrl"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          @click="scrollToProjects"
          class="group mt-8 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white/65 transition hover:text-white"
          aria-label="Scroll to projects"
        >
          <span class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] transition group-hover:border-white/30 group-hover:bg-white/5">
            <svg
              viewBox="0 0 24 24"
              class="h-4 w-4 animate-bounce text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="m6 13 6 6 6-6" />
            </svg>
          </span>
          <span>Scroll</span>
        </button>
      </div>

    </div>
  </section>
</template>
