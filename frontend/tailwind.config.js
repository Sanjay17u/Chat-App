/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html", // Vite's entry point
    "./src/**/*.{js,jsx,ts,tsx}", // All your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

