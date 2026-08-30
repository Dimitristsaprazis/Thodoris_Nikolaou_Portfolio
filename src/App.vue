<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import ContactFooter from './components/ContactFooter.vue'
import { siteContent } from './data/portfolio'

const locale = ref('en')
const showBackToTop = ref(false)

if (typeof window !== 'undefined') {
  const savedLocale = localStorage.getItem('portfolio-language')
  if (savedLocale === 'en' || savedLocale === 'el') {
    locale.value = savedLocale
  }
}

watch(
  locale,
  (value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-language', value)
    }
  },
  { immediate: true }
)

const currentContent = computed(() => siteContent[locale.value])

const setLanguage = (value) => {
  locale.value = value
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 420
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-bg text-text">
    <Hero
      :content="currentContent"
      :locale="locale"
      @change-language="setLanguage"
    />
    <Projects :content="currentContent" :locale="locale" />
    <ContactFooter :content="currentContent" :locale="locale" />

    <button
      v-show="showBackToTop"
      type="button"
      @click="scrollToTop"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center border border-white/15 bg-[#111315]/90 text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-[#181b1d]"
    >
      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m6 14 6-6 6 6" />
        <path d="M12 8v11" />
      </svg>
    </button>
  </div>
</template>
