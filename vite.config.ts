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
  name: mainPackageJson.name,
  private: false,
  version: mainPackageJson.version,
  type: mainPackageJson.type,
  author: mainPackageJson.author,
};

function createPackageJson(folder: string, urlPostFix: string) {
  const folderPath = resolve(__dirname, `dist/${folder}`);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  fs.writeFileSync(
    `dist/package.json`,
    JSON.stringify({ ...basePackageJson, name: `${basePackageJson.name}/${urlPostFix}` }, null, 2),
  );
}

function generatePackageJson() {
  const args = process.argv.slice(2);
  return {
    name: 'generate-package-json',
    closeBundle() {
      if (args[2] === 'skins') {
        createPackageJson('components', 'shell');
      } else {
        createPackageJson('skins', 'skins');
      }
    },
  };
}

function findEntries(dir: string, base = '') {
  const args = process.argv.slice(2);
  const entries = {} as any;
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = resolve(dir, file);
    if (args[2] !== base.split('/')[0]) {
      if (fs.statSync(fullPath).isDirectory()) {
        Object.assign(entries, findEntries(fullPath, `${base}${file}/`));
      } else if (
        (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.ts')) &&
        !file.includes('.test.') &&
        !file.includes('.stories.') &&
        !file.includes('.d.ts') &&
        !file.includes('.manifest.') &&
        file !== 'App.tsx' &&
        file !== 'main.tsx'
      ) {
        const name = `${base}${file.replace(/\.(tsx|jsx|ts)$/, '')}`;
        entries[name] = fullPath;
      }
    }
  });
  return entries;
}

const srcDir = './src';
const entries = findEntries(srcDir);
entries['styles'] = resolve(__dirname, 'src/index.css');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generatePackageJson(),
    tsConfigPath(),
    libInjectCss(),
    dts({ insertTypesEntry: true, tsconfigPath: './tsconfig.json', rollupTypes: true }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: mainPackageJson.name,
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `${mainPackageJson.name}.${format}.js`,
    },
    rollupOptions: {
      output: {
        dir: 'dist',
        format: 'es',
      },
      treeshake: false,
    },
    outDir: 'dist',
  },
  preview: {
    port: 3000,
    open: true,
  },
});
