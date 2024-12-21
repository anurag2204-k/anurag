/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00ffff',
          pink: '#ff00ff',
          yellow: '#ffff00',
          green: '#00ff00',
          
        },
        "blue-500": "#1e40af",
        "blue-400": "#3b82f6",
        "green-500": "#10b981",
        "yellow-500": "#fbbf24",
        "red-500": "#ef4444",
        "purple-500": "#a855f7",
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")',
      },
    },
  },
  plugins: [],
}

 