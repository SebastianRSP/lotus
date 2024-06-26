/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['var(--font-plus-jakarta-sans)'],
      },
      fontSize: {
        '123': '123px',
        '142': '142px',
        '100': '100px',
      },
      boxShadow: {
        'outer': '6px 6px 0px #00000041',
        'button': '6px 6px 0px #00000040',
        'inner': 'inset 4px 4px 0px #00000040',
      },
      borderColor: {
        'black': '#000000',
      },
      colors: {
        'yellowLight': '#FFFCEB',
        'yellowDark': '#F7EDB8',
        'purple': '#D869F3',
        'black': '#000000',
        'green': '#00FF00',
      },
      height: {
        'inherit': '-webkit-fill-available',
      },
      letterSpacing: {
        'space60': '0.6px',
        'space00': '0px',
        'space90': '0.9px',
      },
      lineHeight: {
        '66': '66px',
        '100': '100px',
        '142': '142px',
      },
      padding: {
        '74': '74px',
      }
    },
  },
  plugins: [],
};
