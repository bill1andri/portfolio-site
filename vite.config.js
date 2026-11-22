import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves the site from /portfolio-site/; Vercel (which sets
// VERCEL=1 during its builds) serves it from the domain root.
const base = process.env.VERCEL ? '/' : '/portfolio-site/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
