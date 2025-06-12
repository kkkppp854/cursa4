import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import data from "./data.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
