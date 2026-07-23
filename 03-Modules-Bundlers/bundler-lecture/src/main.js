import './index.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

const app = document.querySelector('#app')

const h1 = document.createElement('h1')
h1.textContent = 'Hello Vite + JavaScript!'
h1.classList.add('text-xl', 'font-bold', 'mb-4', 'text-center', 'text-primary')
app.appendChild(h1)

const img = document.createElement('img')
img.src = heroImg
img.alt = 'Hero Image'
img.classList.add('hero-image')

app.appendChild(img)

setupCounter(document.querySelector('#counter'))
