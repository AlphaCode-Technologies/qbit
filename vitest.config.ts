/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.test.{ts,tsx}'],
      setupFiles: ['./setupTests.ts'],
      reporters: ['html'],
      outputFile: { html: '.testing/html/index.html' },
      coverage: {
        reportsDirectory: '.testing/coverage',
        include: ['src/*'],
        exclude: [
          'src/**/*.{stories,test}.{ts,tsx}',
          'src/**/properties.ts',
          'src/**/*.manifest.{ts,tsx,json}',
          'src/*.{ts,tsx}',
          'src/skins',
          'src/types',
        ],
      },
    },
  }),
);
