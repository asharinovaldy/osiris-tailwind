/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "bg-hero": "url('/images/bg-hero.png')",
        "bg-why-choose-us": "url('/images/why choose us bg.svg')",
      },
      colors: {
        "color-title": "#34364A",
        "color-description": "#5D5D64",
      },
      borderRadius: {
        "border-radius-card": "60px",
      },
      width: {
        "width-card": "500px",
      },
    },
  },
  plugins: [],
};
