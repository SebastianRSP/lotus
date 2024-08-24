/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'plus-jakarta-sans': ['var(--font-plus-jakarta-sans)'],
      },
      fontSize: {
        '8':'.8rem',
        '30': '1.875rem',
        '26': '1.625rem',
        '32': '2rem',
        '80': '4rem',
        '90': '5rem',
        '100': '6.25rem',
        '118': '7.375rem',
        '123': '7.6875rem',
        '142': '8.875rem',
        '144': '9rem',
        '1.5xl': '1.3rem',
      },
      fontWeight: {
        'light' : '200',
      },
      boxShadow: {
        'outer': '6px 6px 0px #00000041',
        'card-outer': '12px 12px 0px #00000040',
        'card-outer-green': '12px 12px 0px #03FF00',
        'button': '6px 6px 0px #00000040',
        'button-green': '6px 6px 0px #03FF00',
        'white': '2px 2px 0px #fff',
        'black': '2px 2px 0px #000',
        'wrapper-button-green': '7px 7px 0px #03FF00',
        'button-green-hover': '4px 4px 0px #03ff00;',
        'inner': 'inset 4px 4px 0px #00000040',
      },
      borderColor: { 
        'black': '#000000',
        'dark-gray': '#0D0D0D',
        'light-gray': '#00000040',
        'light': '#ffffff40',
        'hr': '#BFBFBF'
      },
      colors: {
        'white': '#FFFFFF',
        'yellowLight': '#FFFCEB',
        'yellowDark': '#F7EDB8',
        'purple': '#D869F3',
        'black': '#000000',
        'gray': '#252525',
        'gray-light': '#F2F2F2',
        'gray-circle': '#404240',
        'green': '#00FF00',
      },
      height: {
        'inherit': 'inherit',
        '121': '121px',
        '35': '35rem',
        '43': '43rem',
        '105ch': '105ch',
        '120ch': '120ch',
        '150ch': '150ch',
      },
      width: {
        '121': '121px',
        '21r': '21rem',
        '160': '16rem',
        '35': '35rem',
        '43': '43rem',
        '50' : '50rem'
      },
      letterSpacing: {
        'space60': '0.6px',
        'space00': '0px',
        'space90': '0.9px',
        'space12': '1.2px',
        'space18': '1.8px',
        'space-25': '-25px',
        'space-346': '3.46px'
      },
      lineHeight: {
        '26': '26px',
        '30': '30px',
        '32': '32px',
        '40': '40px',
        '43': '43px',
        '50': '50px',
        '56': '56px',
        '66': '66px',
        '74': '74px',
        '78': '78px',
        '80': '80px',
        '84': '84px',
        '90': '90px',
        '100': '100px',
        '142': '142px',
        '154': '154px',
      },
      padding: {
        '0.2': '0.2rem',
        '0.3': '0.3rem',
        '0.5': '0.5rem',
        '1': '1rem',
        '18': '4.5rem',
        '38': '38px',
        '70': '70px',
        '74': '74px',
        '78': '78px',
        '86': '86px',
        '30': '30rem',
        '105': '105px',
        '125': '125px',
        '138': '138px',
        '186': '186px',
      },
      margin: {
        '70': '70px'
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '9': '9px',
        '12': '12px',
      },
      translate: {
        '2px': '2px',
      },
      gap: {
        '4': '1rem', // Custom gap size
      }
    }
  },
  plugins: [],
};
