import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // Output directory for the production build
    },
    assetsInclude: ['**/*.pdf'],
    resolve: {
        alias: {
            '@common': path.resolve(__dirname, './src/common'),
            '@components': path.resolve(__dirname, './src/components'),
            '@ui': path.resolve(__dirname, './src/components/ui'),
            '@lib': path.resolve(__dirname, './src/lib'),
        },
    },
})
