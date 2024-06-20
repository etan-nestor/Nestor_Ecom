/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#ff5500",
        secondary:"#ed9900",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'2rem',
          sm:"3rem",
        },
      },
    },
  },
  plugins: [],
}