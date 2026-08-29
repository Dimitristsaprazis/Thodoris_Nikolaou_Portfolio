<script setup>
defineProps({
  skills: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-20 md:px-10">
    <div class="mb-10 text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Capabilities</p>
      <h2 class="mt-3 font-heading text-3xl font-bold text-text md:text-4xl">Core skills</h2>
    </div>

    <div class="flex flex-wrap justify-center gap-3">
      <span
        v-for="skill in skills"
        :key="skill"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.35 } }"
        class="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:text-primary"
      >
        {{ skill }}
      </span>
    </div>
  </section>
</template>
