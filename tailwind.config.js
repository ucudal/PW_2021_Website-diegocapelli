module.exports = {
  purge: [
    "doc/*.html","doc/*.js"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      
      colors: {
         
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
