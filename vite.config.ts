import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPath from 'vite-tsconfig-paths';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import fs from 'fs';

const mainPackageJson = JSON.parse(fs.readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));
const basePackageJson = {
  name: '@qbit.design',
  private: false,
  version: mainPackageJson.version,
  type: mainPackageJson.type,
  author: mainPackageJson.author,
  license: mainPackageJson.license,
  files: mainPackageJson.files,
  keywords: mainPackageJson.keywords,
  repository: mainPackageJson.repository,
  readme: mainPackageJson.readme,
  types: 'qbit.es.d.ts',
  main: 'qbit.cjs.js',
  module: 'qbit.es.js',
  // scripts: mainPackageJson.scripts,
  // dependencies: mainPackageJson.dependencies,
  // devDependencies: mainPackageJson.devDependencies,
  // peerDependencies: mainPackageJson.peerDependencies,
  publishConfig: mainPackageJson.publishConfig,
};

function createPackageJson(urlPostFix: string) {
  fs.writeFileSync(
    `dist/package.json`,
    JSON.stringify({ ...basePackageJson, name: `${basePackageJson.name}/${urlPostFix}` }, null, 2),
  );
}
const entryFile = process.env.BUILD_ENTRY || 'src/skins/index.ts'; // Default to 'src/skins/index.ts'

function generatePackageJson() {
  const args = process.argv.slice(2);
  console.log(args[1], entryFile.includes('components'));

  return {
    name: 'generate-package-json',
    closeBundle() {
      if (entryFile.includes('components')) {
        createPackageJson('shell-sandbox');
      } else {
        createPackageJson('skin-sandbox');
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generatePackageJson(),
    tsConfigPath(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true,
      exclude: ['**/*.stories.tsx', '**/*.stories.ts', '**/*.test.tsx', '**/*.test.ts'],
      entryRoot: './src',
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, entryFile),
      name: mainPackageJson.name,
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `${mainPackageJson.name}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        exports: 'named',
      },
    },
  },
  preview: {
    port: 3000,
    open: true,
  },
});
