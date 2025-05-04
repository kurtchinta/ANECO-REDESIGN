import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        // Laravel plugin is still included but won't interfere on Vercel since it's just input handling
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            'ziggy-js': process.env.NODE_ENV === 'development'
                ? resolve(__dirname, 'vendor/tightenco/ziggy')
                : 'ziggy-js',
        },
    },
    // Needed so Vercel sees this as a static Vue build
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: path.resolve(__dirname, 'resources/js/app.ts'),
        },
    },
    // Vercel hint for frontend static deployment
    optimizeDeps: {
        include: ['vue'],
    }
});
