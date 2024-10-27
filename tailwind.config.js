/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        future: ['Future2', 'Arial', 'sans-serif'], // Define the custom font
      },
    },
  },
  plugins: [],
}

