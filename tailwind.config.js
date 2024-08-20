/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "bright-lime": "#c4f82a",
        "color-background": "#141414",
        "gray-color": "#333333",
        "dark-gray": "#1f1f1f",
        "very-dark-gray": "#202020" 
      }
    },
  },
  plugins: [],
}

