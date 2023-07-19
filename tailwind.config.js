/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1' : ['3.75rem'],
        'h2' : ['1.5rem'],
        'h3' : ['1.18rem'],
        'p' : ['0.75rem'],
        'button' : ['1.25rem'],
      },
      fontWeight: {
        'header' : ['700'],
        'content': ['200'],
      }
    },
  },
  plugins: [],
}
