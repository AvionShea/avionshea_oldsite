import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    //env variable from .env file
    'process.env.VITE_APP': JSON.stringify(process.env.VITE_APP)
  }
})
