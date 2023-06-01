/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark': '#7b5e22',
        'light': '#f1dcbf',
      },
      width: {
        '350': '350px',
        '400': '400px',
      }
    },
  },
  plugins: [],
}