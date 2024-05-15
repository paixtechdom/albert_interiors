/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero1": "url('./src/assets/images/1.jpg')",
        "hero2": "url('./src/assets/images/2.jpg')",
        "hero3": "url('./src/assets/images/5.jpg')",
        "hero4": "url('./src/assets/images/7.jpg')"
      }
    },
  },
  plugins: [],
}

