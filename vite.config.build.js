import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/",
    build: {
        outDir: "dist",
        assetsDir: "src/assets/",
        manifest: true,
        rollupOptions: {
            output: {
                entryFileNames: "assets/[name]-[hash].js",
                chunkFileNames: "assets/[name]-[hash].js",
                assetFileNames: "assets/[name]-[hash].[ext]",
            },
        },
    },
    preview: {
        port: 5050,
        strictPort: true,
    },
    server: {
        port: 5050,
        strictPort: true,
        host: true,
        origin: "http://0.0.0.0:5050",
    },
}) 