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
        'dark-blue': '#170B3B',
        'purple': '#341948',
        'purple-haze': '#9388A2',
      },
      fontFamily: {
        header: ["var(--font-oswald)"],
        body: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
}

