// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: 'resources',
  plugins: [vue()],
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
