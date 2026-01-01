import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Change made by Amazon Q
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), // Change made by Amazon Q
    tailwindcss(),
  ],
})