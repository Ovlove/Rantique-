import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify/functions';
import image from '@astrojs/image';

export default defineConfig({
  output: 'static',
  adapter: netlify(),
  integrations: [
    tailwind({ config: './tailwind.config.mjs' }),
    mdx(),
    sitemap(),
    image(),
  ],
  experimental: {
    assets: true
  }
});
