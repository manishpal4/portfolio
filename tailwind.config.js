/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
      },
      fontFamily:{
        heading:['Ubuntu', "serif"],
        p:["Ubuntu Mono", 'monospace']

      }

    },
  },
  plugins: [],
}

