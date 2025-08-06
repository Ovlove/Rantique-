import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import path from 'path';

export default defineConfig({
  output: 'static',
  adapter: netlify(),
  integrations: [mdx()],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve('./src'),
      },
    },
  },
});
