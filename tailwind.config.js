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
          50: '#fdf3f4',
          100: '#fbe5e7',
          200: '#f6ced4',
          300: '#efacb6',
          400: '#e57e8d',
          500: '#d74d61',
          600: '#c23348',
          700: '#a32536',
          800: '#88222d',
          900: '#722129',
          950: '#3f0d14',
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
