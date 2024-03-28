/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bagel: ['"Bagel Fat One"', "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],

}

