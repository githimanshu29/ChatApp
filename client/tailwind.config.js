/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",// this means it will work on the mentioned files as well
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

