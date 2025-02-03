import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
  plugins: [react(), generatePackageJson()],
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
  build: {
    rollupOptions: {
      input: entries,
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
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
