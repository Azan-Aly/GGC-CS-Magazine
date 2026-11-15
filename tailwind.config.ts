import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#08090B',
          surface: '#111318',
          elevated: '#181B22',
          border: '#222631',
        },
        electric: {
          blue: '#4F8CFF',
          hover: '#3b79ee',
        },
        vibrant: {
          violet: '#7C5CFF',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
