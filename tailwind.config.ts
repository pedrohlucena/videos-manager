import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      colors: {
        gray1: '#2d2f31',
        gray2: '#3e4143',
        gray3: '#6a6f73',
        gray4: '#d1d7dc',
      },
    },
  },
  plugins: [],
}

export default config
