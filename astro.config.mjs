import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import path from 'path';

export default defineConfig({
  output: 'static',
  adapter: netlify(),
  integrations: [mdx()],
  alias: {
    '@components': path.resolve('./src/components'),
    '@layouts': path.resolve('./src/layouts'),
    '@pages': path.resolve('./src/pages'),
    '@utils': path.resolve('./src/utils'),
    '@styles': path.resolve('./src/styles'),
  },
});
