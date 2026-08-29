import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './theme.css'

const app = createApp(App)
app.mount('#app')

const cursor = document.createElement('div')
cursor.className = 'cursor'
document.body.appendChild(cursor)

const setCursorPosition = (event) => {
  cursor.style.opacity = '1'
  cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
}

window.addEventListener('pointermove', setCursorPosition)
window.addEventListener('pointerleave', () => {
  cursor.style.opacity = '0'
})
window.addEventListener('pointerenter', () => {
  cursor.style.opacity = '1'
})

const interactiveElements = document.querySelectorAll('.cursor-button, button, a')
interactiveElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.style.opacity = '0'
    element.style.cursor = 'pointer'
  })

  element.addEventListener('mouseleave', () => {
    cursor.style.opacity = '1'
    element.style.cursor = ''
  })
})

const hideCursorSystemwide = () => {
  if (document.querySelector(':hover') && !document.querySelector('.cursor-button:hover, button:hover, a:hover')) {
    document.body.style.cursor = 'none'
  } else {
    document.body.style.cursor = ''
  }
}

window.addEventListener('pointermove', hideCursorSystemwide)
