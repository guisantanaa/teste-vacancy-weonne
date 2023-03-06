/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/test.jpg)',
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        orange: {
          500: '#FBA94C',
        },
      },
    },
  },
  plugins: [],
};
