module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'merienda': ['"Merienda"', 'cursive']
      },
      colors: {
        amazon_blue: {
          light: "#C0B6AC",
         
        },
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/hero-pattern.jpg')",
        'hero-class': "url('/img/hero-class.jpg')",
       })
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
