/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0E050F',
        'dark-blue': {
          '1': '#170B3B',
          '2': '#271B4B'
        },
        'purple': {
          '1': '#341948',
          '2': '#412952'
        },
        'purple-haze': '#9388A2',
        'pink': '#F8B7CD',
        'blue': '#67A3D9'
      },
      fontFamily: {
        header: ["var(--font-oswald)"],
        body: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
}

