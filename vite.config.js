import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // isso serve para importar arquivos de forma mais fácil ex: import Button from '@/components/Button'
      '@components': '/src/components', // isso serve para importar arquivos de forma mais fácil ex: import Button from '@components/Button'
    },
  },
})