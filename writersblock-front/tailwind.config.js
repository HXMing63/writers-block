/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'brand-linear-gradient': `linear-gradient(180deg, ${theme('colors.brand-darkest')}, ${theme('colors.brand-dark')}, ${theme('colors.brand-light')}, ${theme('colors.brand-lightest')})`,
        'brand-linear-gradient-light': `linear-gradient(180deg, ${theme('colors.brand-light')}, ${theme('colors.brand-lightest')})`,
        'brand-linear-gradient-dark': `linear-gradient(180deg, ${theme('colors.brand-darkest')}, ${theme('colors.brand-dark')})`,
        'brand-linear-gradient-dark-reverse': `linear-gradient(0deg, ${theme('colors.brand-darkest')}, ${theme('colors.brand-dark')})`,
        'brand-radial-gradient': `radial-gradient(${theme('colors.brand-lightest')} 5%, ${theme('colors.brand-light')} 15%, ${theme('colors.brand-dark')} 30%, ${theme('colors.brand-darkest')})`
      }),
      colors:{
        'brand-darkest': '#001519',
        'brand-darkest-analogous': '#000919',
        'brand-dark': '#183D3B',
        'brand-dark-analogous': '#183d29',
        'brand-light': '#00F1AA',
        'brand-lightest': '#34FFC6',
        'brand-error': '#F10047',
        'brand-error-analogous': '#F100C0',
        'brand-neutral': '#00C0F1',
        'brand-neutral-analogous': '#00F1AA',
        'brand-success': '#00F132',
        'brand-success-analogous': '#00F1AB',
        'brand-warning': '#F1AA00',
        'brand-warning-analogous': '#C0F100'
      },
      spacing:{
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',
        '192': '48rem',
        '200': '50rem',
        '216': '54rem',
        '224': '56rem',
        '232': '58rem',
        '256': '64rem'
      },
      zIndex:{
        '100': '100',
        '110': '110'
      },
      minHeight:{
        '24': '6rem',
        '40': '10rem',
        '60': '15rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}