/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html',
    './src/output.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

