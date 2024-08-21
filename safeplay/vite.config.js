import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
 build: {
  rollupOptions: {
    input: path.resolve(__dirname, 'index.html'), // Ensure the entry point is explicitly defined
  },
},
})
