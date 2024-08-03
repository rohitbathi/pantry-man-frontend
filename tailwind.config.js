const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customdark: '#283d3b',
        mid: '#197278',
        light: '#edddd4'
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif']
      },
      keyframes:{
        lout: {
          '0%': {transform:'translateX(0)'},
          '100%': {transform:'translateX(-100%) '}
        }
      },
      animation:{
        lout: 'lout 1s ease-out forwards 1s'
      }
    },
  },
  plugins: [],
}

