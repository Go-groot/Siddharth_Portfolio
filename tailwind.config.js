/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont:['Montserrat']
      },
      fontWeight:{
        myWeight:900
      },
    },
  },
  plugins: [],
}