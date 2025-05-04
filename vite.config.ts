import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  build: {
    outDir: 'dist', // Required by Vercel
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // or 'resources/js' if you're keeping that
    },
  },
});
