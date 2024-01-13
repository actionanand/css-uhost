// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        packages: resolve(__dirname, 'pages/packages/index.html'),
        customers: resolve(__dirname, 'pages/packages/index.html'),
      },
    },
  },
});
