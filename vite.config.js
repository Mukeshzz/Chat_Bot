import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_KEY' : JSON.stringify(process.env.VITE_API_KEY)
  }
})
