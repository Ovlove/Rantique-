// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  output: 'static',
  adapter: netlify(),
  integrations: [mdx()],
});
