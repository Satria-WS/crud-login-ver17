/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        desktop: '1500px',
      },
    },
  },
  plugins: [],
};
