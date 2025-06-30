// tailwind.config.mjs
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#1A1A2E',
        secondary: '#7F5AF0',
        accent: '#10B981',
        background: '#FAFAFA',
        text: '#2E2E2E',
        muted: '#6B7280',
      },
    },
  },
  plugins: [typography],
};
