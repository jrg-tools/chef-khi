import path from 'node:path';
import node from '@astrojs/node';
import react from '@astrojs/react';
import clerk from '@clerk/astro';
import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  output: 'server',
  security: {
    checkOrigin: false,
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '~': path.resolve('./'),
      },
    },
  },
  integrations: [react(), clerk()],
  env: {
    schema: {
      // client
      PUBLIC_CLERK_PUBLISHABLE_KEY: envField.string({ context: 'client', access: 'public', required: true }),
      // server
      BASE_URL: envField.string({ context: 'server', access: 'secret', default: 'http://localhost:4321', url: true }),
      CLERK_SECRET_KEY: envField.string({ context: 'server', access: 'secret', required: true, default: '' }),
      CLERK_ACCOUNTS_URL: envField.string({ context: 'server', access: 'secret', required: true, default: '' }),
      AWS_ACCESS_KEY_ID: envField.string({ context: 'server', access: 'secret', required: true, default: '' }),
      AWS_SECRET_ACCESS_KEY: envField.string({ context: 'server', access: 'secret', required: true, default: '' }),
      DATABASE_URL: envField.string({ context: 'server', access: 'secret', default: 'file:/app/data/database.db' }),
      DATABASE_SYNC_URL: envField.string({ context: 'server', access: 'secret', required: true, default: '' }),
      DATABASE_TOKEN: envField.string({ context: 'server', access: 'secret', required: true, default: '' }),
    },
  },
});
