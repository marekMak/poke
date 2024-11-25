/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'new-amsterdam': ['New Amsterdam', 'sans-serif'], // Pridaj nový font
      },
    },
  },
  plugins: [],
}