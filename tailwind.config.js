/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        ink: '#0f1114',
        sand: '#f7f4ef',
        clay: '#f0ece6',
        mist: '#f7f2ea',
        moss: '#0f7a6c',
        ember: '#d88f5b',
      },
    },
  },
  plugins: [],
}
