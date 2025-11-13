/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        polish: {
          white: "#FFFFFF",
          red: "#DC143C"
        }
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
