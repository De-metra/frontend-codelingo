import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        auth: resolve(__dirname, 'achievments/index.html'),
        auth: resolve(__dirname, 'auth/index.html'),
        auth: resolve(__dirname, 'courses/index.html'),
        auth: resolve(__dirname, 'lesson/index.html'),
        auth: resolve(__dirname, 'profile/index.html'),
        auth: resolve(__dirname, 'profile-settings/index.html'),
        auth: resolve(__dirname, 'track/index.html'),
      },
    },
  },
})