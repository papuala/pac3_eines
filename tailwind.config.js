/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '350': '350px',
        '400': '400px',
      }
    },
  },
  plugins: [],
}