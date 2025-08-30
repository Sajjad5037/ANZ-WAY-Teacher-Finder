/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // Homebridge purple (example hex)
        secondary: '#6B21A8', // darker purple for hover or accents
        lightPurple: '#EDE9FE', // light background for sections
      },
    },
  },
  plugins: [],
};
