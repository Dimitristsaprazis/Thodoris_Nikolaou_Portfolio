<script setup>
import { caseStudies } from '../data/portfolio'
</script>

<template>
  <section class="relative border-t border-white/10 bg-bg py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div class="mb-12 flex items-end justify-between gap-6">
        <div>
          <p class="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
            Selected Work
          </p>
          <h2 class="mt-4 font-heading text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Projects
          </h2>
        </div>

        <a
          href="#"
          class="hidden cursor-button rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5 sm:inline-flex"
        >
          View all
        </a>
      </div>

      <div class="grid gap-7 lg:grid-cols-2">
        <article
          v-for="(project, index) in caseStudies"
          :key="project.title"
          class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_35%)] p-3 transition duration-300 hover:-translate-y-1 hover:border-white/20"
        >
          <div class="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
            <div class="absolute inset-3 z-10 rounded-[1.2rem] border border-white/10"></div>
            <img
              :src="project.images[0]"
              :alt="project.title"
              class="h-72 w-full object-cover grayscale transition duration-500 group-hover:scale-[1.04]"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"></div>
            <span class="absolute left-5 top-5 z-20 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm">
              0{{ index + 1 }}
            </span>
          </div>

          <div class="relative z-10 mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <div class="flex items-center justify-between gap-4">
              <h3 class="font-heading text-2xl font-semibold tracking-[-0.04em] text-white">
                {{ project.title }}
              </h3>
              <span class="text-[10px] uppercase tracking-[0.24em] text-white/45">Case study</span>
            </div>

            <p class="mt-4 text-sm leading-6 text-white/65">
              {{ project.problem }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tool in project.tools"
                :key="tool"
                class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/70"
              >
                {{ tool }}
              </span>
            </div>

            <div class="mt-6 border-t border-white/10 pt-5">
              <p class="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                Outcome
              </p>
              <p class="mt-3 text-base leading-7 text-white/75">
                {{ project.result }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
