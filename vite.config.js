import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
    plugins: [
        react(),
        WindiCSS(),
        reactRefresh()
    ]
})