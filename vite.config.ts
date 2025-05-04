import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  root: 'resources', // your frontend is in 'resources'
  build: {
    outDir: '../dist', // Vercel expects this
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
    }
  },
  plugins: [vue()]
})
