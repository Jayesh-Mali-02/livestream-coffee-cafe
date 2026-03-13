import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({ 
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}']
            }
        }),
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
                manualChunks: {
                    'vendor-react': ['react', 'react-dom'],
                    'vendor-router': ['react-router-dom', 'react-helmet-async'],
                    'vendor-supabase': ['@supabase/supabase-js']
                }
            }
        },
        // Also helps with some dependencies that try to use eval for source maps or format hints
        sourcemap: false
    }
})
