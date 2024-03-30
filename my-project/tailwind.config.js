/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./src/index.html"],
  theme: {
    extend: {
      colors: {
        lightGray: "#f8f9fa",
      },
      backgroundImage: {
        frontPage: "url(images/homepage-bg.png)",
      },
      fontFamily: {
        teko: ["Teko", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        noto: ["Noto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
