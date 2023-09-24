import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'], insertTypesEntry: true })],
   build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        entryFileNames: '[name].js'
      }
    },    
  },
  
});

