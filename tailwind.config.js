/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ysabeau: ['"Ysabeau Office"', "sans-serif"],
        OpenSans: ["'Open Sans'", "sans-serif"],
      },
      colors: {
        primary: "#98002e",
        gainsboro: "#dcdcdc",
        highText: "#ffc424",
      },
      keyframes: {
        slideInLeft: {
          "0%": {
            transform: "translateX(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(-100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 300ms ease-in-out 1",
        slideInRight: "slideInRight 300ms ease-in-out 1",
      },
    },
  },
  plugins: [],
};
