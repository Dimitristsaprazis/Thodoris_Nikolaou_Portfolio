<script setup>
import { caseStudies } from '../data/portfolio'
</script>

<template>
  <section id="projects" class="relative border-t border-white/10 bg-bg pt-8 pb-20 sm:pt-10 sm:pb-24">
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
          class="group relative overflow-hidden bg-[#0d0d0d] p-0 transition duration-300 hover:-translate-y-1"
        >
          <div class="absolute inset-0 border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_42px_rgba(0,0,0,0.5)]"></div>
          <div class="absolute inset-[6px] border border-white/5"></div>

          <div class="relative overflow-hidden border-b border-white/10 bg-black">
            <img
              :src="project.images[0]"
              :alt="project.title"
              class="h-64 w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]"
            />
            <span class="absolute left-4 top-4 z-20 border border-white/10 bg-black/45 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm">
              0{{ index + 1 }}
            </span>
          </div>

          <div class="relative z-10 p-5 sm:p-6">
            <div class="flex items-center justify-between gap-4">
              <h3 class="font-heading text-2xl font-semibold tracking-[-0.04em] text-white">
                {{ project.title }}
              </h3>
              <span class="text-[10px] uppercase tracking-[0.22em] text-white/40">Case study</span>
            </div>

            <p class="mt-4 text-sm leading-6 text-white/65">
              {{ project.problem }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tool in project.tools"
                :key="tool"
                class="rounded-full border border-white/10 bg-transparent px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/60"
              >
                {{ tool }}
              </span>
            </div>

            <div class="mt-6 border-t border-white/10 pt-4">
              <p class="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
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
