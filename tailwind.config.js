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
        '30': '1.875rem',
        '26': '1.625rem',
        '32': '2rem',
        '90': '5rem',
        '100': '6.25rem',
        '123': '7.6875rem',
        '142': '8.875rem',
        '144': '9rem',
      },
      boxShadow: {
        'outer': '6px 6px 0px #00000041',
        'card-outer': '12px 12px 0px #00000040',
        'card-outer-green': '12px 12px 0px #03FF00',
        'button': '6px 6px 0px #00000040',
        'button-green': '6px 6px 0px #03FF00',
        'button-green-hover': '3px 3px 0px #03FF00',
        'inner': 'inset 4px 4px 0px #00000040',
      },
      borderColor: {
        'black': '#000000',
        'dark-gray': '#0D0D0D',
        'light-gray': '#00000040',
        'light': '#ffffff40',
      },
      colors: {
        'yellowLight': '#FFFCEB',
        'yellowDark': '#F7EDB8',
        'purple': '#D869F3',
        'black': '#000000',
        'gray': '#252525',
        'gray-light': '#F2F2F2',
        'green': '#00FF00',
      },
      height: {
        'inherit': 'inherit',
        '121': '121px',
        '43': '43rem'
      },
      width: {
        '121': '121px',
        '21r': '21rem',
        '160': '16rem',
        '50' : '50rem'
      },
      letterSpacing: {
        'space60': '0.6px',
        'space00': '0px',
        'space90': '0.9px',
        'space-25': '-25px',
      },
      lineHeight: {
        '26': '26px',
        '30': '30px',
        '32': '32px',
        '40': '40px',
        '43': '43px',
        '50': '50px',
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
        '38': '38px',
        '70': '70px',
        '74': '74px',
        '78': '78px',
        '86': '86px',
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
    }
  },
  plugins: [],
};
