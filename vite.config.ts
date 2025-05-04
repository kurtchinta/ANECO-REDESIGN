// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: '.',
  plugins: [vue()],
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
