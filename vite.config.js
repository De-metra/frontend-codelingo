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
        achievments: resolve(__dirname, 'achievments/index.html'),
        auth: resolve(__dirname, 'auth/index.html'),
        courses: resolve(__dirname, 'courses/index.html'),
        lesson: resolve(__dirname, 'lesson/index.html'),
        profile: resolve(__dirname, 'profile/index.html'),
        profile_settings: resolve(__dirname, 'profile-settings/index.html'),
        track: resolve(__dirname, 'track/index.html'),
      },
    },
  },
})