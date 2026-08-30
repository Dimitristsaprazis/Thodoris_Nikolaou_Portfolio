<script setup>
import { computed } from 'vue'
import { caseStudies } from '../data/portfolio'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  locale: {
    type: String,
    default: 'en',
  },
})

const filteredCaseStudies = computed(() => caseStudies[props.locale] || caseStudies.en)
</script>

<template>
  <section id="projects" class="relative border-t border-white/10 bg-bg pt-8 pb-20 sm:pt-10 sm:pb-24">
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div class="mb-12 flex items-end justify-between gap-6">
        <div>
          <p class="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
            {{ content.projects.eyebrow }}
          </p>
          <h2 class="mt-4 font-heading text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {{ content.projects.title }}
          </h2>
        </div>

        <a
          href="#"
          class="hidden cursor-button rounded-full border border-white/15 bg-white/3 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/6 sm:inline-flex"
        >
          {{ content.projects.viewAll }}
        </a>
      </div>

      <div class="project-slider flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-2 lg:gap-7 lg:overflow-visible lg:pb-0">
        <article
          v-for="(project, index) in filteredCaseStudies"
          :key="project.title"
          class="group relative w-[82vw] min-w-[82vw] shrink-0 snap-start overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_32%),linear-gradient(180deg,_rgba(17,17,19,0.98),_rgba(10,10,12,0.96))] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_64px_rgba(59,130,246,0.12)] lg:w-auto lg:min-w-0 lg:rounded-[28px] lg:p-3"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

          <div class="relative rounded-[22px] border border-white/8 bg-black/30 p-2">
            <div class="relative overflow-hidden rounded-[16px] border border-white/10">
              <img
                :src="project.images[0]"
                :alt="project.title"
                class="h-44 w-full object-cover grayscale transition duration-500 group-hover:scale-[1.04] sm:h-52 lg:h-64"
              />

              <div class="absolute inset-0 bg-gradient-to-t from-[#07090d] via-[#07090d]/15 to-transparent"></div>

              <div class="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                <span class="rounded-full border border-white/12 bg-black/35 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm">
                  0{{ index + 1 }}
                </span>
                <span class="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-cyan-100/80 backdrop-blur-sm">
                  {{ content.projects.caseStudy }}
                </span>
              </div>
            </div>

            <div class="px-2 pb-2 pt-4 sm:pt-5">
              <div class="flex items-start justify-between gap-4">
                <h3 class="max-w-[68%] font-heading text-xl font-semibold tracking-[-0.05em] text-white sm:text-2xl lg:text-2xl">
                  {{ project.title }}
                </h3>
                <span class="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">2024</span>
              </div>

              <p class="mt-3 text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                {{ project.problem }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tool in project.tools.slice(0, 3)"
                  :key="tool"
                  class="rounded-full border border-white/10 bg-white/[0.02] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-white/65 sm:px-2.5 sm:text-[10px]"
                >
                  {{ tool }}
                </span>
              </div>

              <div class="mt-4 hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:block sm:p-4 lg:mt-6">
                <p class="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
                  {{ content.projects.outcome }}
                </p>
                <p class="mt-2 text-sm leading-6 text-white/75 sm:mt-3 sm:text-base sm:leading-7">
                  {{ project.result }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-slider {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.project-slider::-webkit-scrollbar {
  display: none;
}
</style>
