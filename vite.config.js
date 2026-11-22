import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Lumina/', // GitHub Pages serve em /<repo>/
  plugins: [react(), tailwindcss()],
})
