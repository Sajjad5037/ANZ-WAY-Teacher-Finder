/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#9b51e0',      // Homebridge purple
        primary-dark: '#872dcf', // slightly darker for hover
        secondary: '#ffffff',     // white for text/icons
      },
    },
  },
  plugins: [],
}
