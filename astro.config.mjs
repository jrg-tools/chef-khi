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
    define: {
      'process.env.PUBLIC_CLERK_PUBLISHABLE_KEY': JSON.stringify(
        process.env.PUBLIC_CLERK_PUBLISHABLE_KEY,
      ),
    },
  },
  integrations: [react(), clerk({
    secretKey: process.env.CLERK_SECRET_KEY,
  })],
  env: {
    schema: {
      // client
      PUBLIC_CLERK_PUBLISHABLE_KEY: envField.string({ context: 'client', access: 'public' }),
      // server
      BASE_URL: envField.string({ context: 'server', access: 'secret', default: 'http://localhost:4321', url: true }),
      CLERK_SECRET_KEY: envField.string({ context: 'server', access: 'secret' }),
      CLERK_ACCOUNTS_URL: envField.string({ context: 'server', access: 'secret', default: 'https://accounts.clerk.com' }),
      AWS_ACCESS_KEY_ID: envField.string({ context: 'server', access: 'secret', default: '' }),
      AWS_SECRET_ACCESS_KEY: envField.string({ context: 'server', access: 'secret', default: '' }),
      DATABASE_URL: envField.string({ context: 'server', access: 'secret', default: 'file:/app/data/database.db' }),
      DATABASE_SYNC_URL: envField.string({ context: 'server', access: 'secret', default: 'file:/app/data/sync.db' }),
      DATABASE_TOKEN: envField.string({ context: 'server', access: 'secret', default: '' }),
    },
  },
});
