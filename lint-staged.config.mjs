export default {
  '*.{ts,tsx}': ['pnpm run lint:fix', 'pnpm run format'],
  '*.{html,css,json}': 'pnpm run format',
};
