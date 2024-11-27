/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/__tests__/*.test.{ts,tsx}'],
      setupFiles: ['src/__tests__/setupTests.ts'],
      reporters: ['html'],
      outputFile: { html: '.testing/html/index.html' },
    },
  }),
);
