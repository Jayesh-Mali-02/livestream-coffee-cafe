import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // Makes asset paths relative so it works on GitHub Pages
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
