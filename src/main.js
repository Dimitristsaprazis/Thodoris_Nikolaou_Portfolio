import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './theme.css'
import './index.css'

const app = createApp(App)
app.use(MotionPlugin)

const cursor = document.createElement('div')
cursor.className = 'custom-cursor'
cursor.innerHTML = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M3 3.5L15.5 12L8 12L15.5 20.5L12.8 20.5L4 12L3 3.5Z" />
  </svg>
`
document.body.appendChild(cursor)

window.addEventListener('pointermove', (event) => {
  cursor.style.left = `${event.clientX}px`
  cursor.style.top = `${event.clientY}px`
  cursor.classList.remove('custom-cursor--hidden')
})

window.addEventListener('pointerleave', () => {
  cursor.classList.add('custom-cursor--hidden')
})

app.mount('#app')
