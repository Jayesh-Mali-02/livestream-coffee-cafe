import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteCompression({
            algorithm: 'brotliCompress',
            ext: '.br',
            threshold: 1024,
        }),
        viteCompression({
            algorithm: 'gzip',
            ext: '.gz',
            threshold: 1024,
        })
    ],
    base: '/', // Absolute base required for React Router (BrowserRouter) on Vercel
    build: {
        rollupOptions: {
            output: {
                // Ensure Rollup doesn't inject eval for dynamic imports or specific chunks
                format: 'es',
                manualChunks: undefined,
            }
        },
        // Also helps with some dependencies that try to use eval for source maps or format hints
        sourcemap: false
    }
})
