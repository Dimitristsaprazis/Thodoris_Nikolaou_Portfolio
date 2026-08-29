<script setup>
defineProps({
  caseStudy: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    v-motion
    :initial="{ opacity: 0, y: 18 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :viewport="{ once: true, amount: 0.2 }"
    :transition="{ duration: 0.55, ease: 'easeOut' }"
    class="group overflow-hidden rounded-[2rem] border border-border bg-surface shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(17,17,17,0.08)]"
  >
    <div v-if="caseStudy.iframe" class="aspect-video border-b border-border bg-primary/5">
      <iframe
        :src="caseStudy.iframe"
        class="h-full w-full"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>

    <div v-else-if="caseStudy.images?.length" class="aspect-[16/10] overflow-hidden border-b border-border">
      <img
        :src="caseStudy.images[0]"
        :alt="caseStudy.title"
        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>

    <div class="space-y-5 p-6 md:p-8">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Case study</p>
        <h3 class="mt-3 font-heading text-2xl font-bold text-text">{{ caseStudy.title }}</h3>
      </div>

      <div class="space-y-4 text-sm leading-7 text-muted md:text-base">
        <div>
          <p class="font-semibold text-text">Problem</p>
          <p>{{ caseStudy.problem }}</p>
        </div>

        <div>
          <p class="font-semibold text-text">Approach</p>
          <p>{{ caseStudy.approach }}</p>
        </div>

        <div>
          <p class="font-semibold text-text">Tools</p>
          <div class="mt-2 flex flex-wrap gap-2">
            <span
              v-for="tool in caseStudy.tools"
              :key="tool"
              class="rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-text"
            >
              {{ tool }}
            </span>
          </div>
        </div>

        <div>
          <p class="font-semibold text-text">Result</p>
          <p>{{ caseStudy.result }}</p>
        </div>
      </div>

      <div v-if="caseStudy.images?.length > 1" class="grid gap-4 sm:grid-cols-2">
        <img
          v-for="(image, index) in caseStudy.images.slice(1)"
          :key="index"
          :src="image"
          :alt="`${caseStudy.title} screenshot ${index + 2}`"
          class="h-32 w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  </article>
</template>
