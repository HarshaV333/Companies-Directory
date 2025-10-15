/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      },
      colors:{
        RichBlack: "#0d1b2aff",
        oxfordBlue: "#1b263bff",
        yinmnBlue: "#415a77ff",
        silverLakeBlue: "#778da9ff",
        Platinum: "#e0e1ddff",
      }
    },
  },
  plugins: [],
};
