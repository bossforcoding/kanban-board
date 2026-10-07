import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Sources use JSX in .js files, so tell esbuild to parse them as JSX.
export default defineConfig({
  base: './',
  plugins: [react({ include: /\.(js|jsx)$/ })],
  esbuild: { loader: 'jsx', include: /src\/.*\.js$/, exclude: [] },
  optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } },
});
