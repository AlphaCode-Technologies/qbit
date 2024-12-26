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
      '@displays': path.resolve(__dirname, 'src/components/displays'),
      '@skins': path.resolve(__dirname, 'src/skins'),
      '@utils': path.resolve(__dirname, 'src/utilities'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@fixtures': path.resolve(__dirname, 'src/fixtures'),
    },
  },

  preview: {
    port: 3000,
    open: true,
  },
});
