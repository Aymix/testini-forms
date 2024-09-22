/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths as necessary for your project
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px', // Adds a 1px border width utility
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-red': '#CC4636', // Custom color for button and borders
      },
    },
  },
  plugins: [require('daisyui')],
}