/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': '700px',
      // => @media (min-width: 700px) { ... }

      'laptop': '720px',
      // => @media (min-width: 720px) { ... }

      'desktop': '1120px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
