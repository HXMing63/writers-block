/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',
        '192': '48rem'
      },
      zIndex:{
        '100': '100',
        '110': '110'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}