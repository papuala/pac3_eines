/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        'brown-dark': '#7b5e22',
        'brown-light': '#f1dcbf',
        'brown-lighter': '#f9f1e5',
      },
      width: {
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '350': '350px',
        '400': '400px',
      },
      height: {
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '100':'100px',
        '250': '250px',
        '50vh': '50vh',
      },
      maxWidth: {
        '4/5': '80%',
      },
      minHeight: {
        '100':'100px',
      },
      spacing: {
        '1/10': '10%',
        '50': '50px',
        '100': '100px',
      }
    },
  },
  plugins: [],
}