module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url('/assets/bg.jpg')",
       }
    },
    fontFamily: {
      'sans':'Kanit, sans-serif',
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
