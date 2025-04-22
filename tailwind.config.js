/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        orangeTheme: {
          light: '#FFEDD5',
          DEFAULT: '#FB923C',
          dark: '#EA580C',
        },
      },
    },
  },
  plugins: [],
};