/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f8f3',
          100: '#e2efe5',
          200: '#c5dfcb',
          300: '#9ac6a4',
          400: '#6ba777',
          500: '#4a8c57',
          600: '#397044',
          700: '#2f5a37',
          800: '#26492d',
          900: '#203d27',
          950: '#112115',
        },
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
