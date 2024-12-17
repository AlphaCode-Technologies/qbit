import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/components/containers'),
      '@inputs': path.resolve(__dirname, 'src/components/inputs'),
      '@skins': path.resolve(__dirname, 'src/skins'),
    },
  },

  preview: {
    port: 3000,
    open: true,
  },
});
