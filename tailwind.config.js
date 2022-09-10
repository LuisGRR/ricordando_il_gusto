/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            "margin-left": "100%",
            width: "300%",
          },

          to: {
            "margin-left": "0%",
            width: "100%",
          },
        },
      },
      animation: {
        deslizar: "fadeIn 2s linear",
      },
    },
  },
  plugins: [],
};
