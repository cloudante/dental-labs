/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'church-blue': '#7BA7BC',  // The blue color from the header
        'church-dark': '#1F3541',  // The dark blue from hero section
        'church-gray': '#F5F5F5',  // For light backgrounds
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],  // For Korean text support
      },
      aspectRatio: {
        'video': '16 / 9',
      },
    },
  },
  plugins: [],
} 