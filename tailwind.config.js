/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 13s linear infinite' // this is a personalized feat 
      },
      colors: {
        'christian': '#13CC00' // this is a personalized color 
      }
    },
  },
  plugins: [],
}

