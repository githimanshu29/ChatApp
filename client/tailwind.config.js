/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#06b6d4',
        'neon-blue': '#3b82f6',
        'neon-purple': '#8b5cf6',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(6, 182, 212, 0.5)',
        'neon-lg': '0 0 30px rgba(6, 182, 212, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [daisyui],
}

