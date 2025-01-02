import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173, // Optional: Customize the port
    watch: {
      usePolling: true, // Enable polling for file changes
    }
  },
})