/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      'phone': {'min': '0px', 'max': '960px'},
      // => @media (min-width: 384px) { ... }
      'tablet': {'min': '960px', 'max': '1366px'},
      // => @media (min-width: 960px) { ... }
      'laptop': {'min': '1366px', 'max': '1920px'},
      // => @media (min-width: 1440px) { ... }
      'desktop': '1920px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
