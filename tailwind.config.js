/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary-100':"#FCA311",
        'Secondary-100':"#000000",
        'Secondary-200':"#2D3142",
        'Secondary-300': "#3C3C3C",
        'Secondary-400': "#939393",
        'Tertiary-100':"#F7F7F7"
      },
      fontFamily: {
        "Nunito": [ ' Nunito', 'sans serif' ]
        
      }
    },
  },
  plugins: [],
}