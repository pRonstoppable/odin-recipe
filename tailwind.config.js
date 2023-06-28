/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./recipes/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
  theme: {
    container: {
      center: true,
    },
  },

  
}