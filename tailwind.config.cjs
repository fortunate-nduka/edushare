/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif']
      },
      colors: {
        blue: '#2378FF',
        lightBlue: '#D2F1E1',
        headingText: '#101130',
        paraText: '#606176',
        black: '#030303',
        tomato: '#F77E53',
      }
    },
  },
  plugins: [],
}
