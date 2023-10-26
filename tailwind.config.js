/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors:{
        yellow:"#FABB18",
        grey:"#757575",
        trans:"#EFEFEF"
      },
    },
  },
  plugins: [],
}

