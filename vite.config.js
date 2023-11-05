import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/// <reference types="vitest" />
/// <reference types="vite/client" />
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  
  ],
  css: {
    modules: true,
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  
 
});


 