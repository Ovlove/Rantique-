import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode toggling
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#1A1A2E',       // Deep Indigo Black
        secondary: '#7F5AF0',     // Electric Violet
        accent: '#10B981',        // Emerald Green
        base: '#FAFAFA',          // Soft White
        muted: '#6B7280',         // Cool Gray
        dark: '#0F0F1A',          // Charcoal Navy (Dark mode)
      },
    },
  },
  plugins: [typography],
};
