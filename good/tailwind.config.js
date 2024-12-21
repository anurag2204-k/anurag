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
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")',
      },
    },
  },
  plugins: [],
}

 