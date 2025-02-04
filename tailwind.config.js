/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pressStart: ['"Press Start 2P"', "serif"],
        jua: ['"Jua"', "serif"],
      }
    },
  },
  plugins: [],
}

