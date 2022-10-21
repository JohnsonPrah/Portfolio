/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgcol':" #070c12",
        'prcol':"#06B1F7 ",
        'seccol':"#6BA4F2 "
      },
      fontFamily:{
        signature:"Great Vibes"
      }
    },
  },
  plugins: [],
}
