import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base: "/nadineziadi/",
  plugins: [react()],
  server: {
    port: 3000,
  },
})