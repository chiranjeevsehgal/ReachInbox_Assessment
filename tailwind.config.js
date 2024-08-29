/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4px': '4px',
      },
      fontWeight: {
        'extra-bold': 700,
      },
    },
  },
  plugins: [],
}

