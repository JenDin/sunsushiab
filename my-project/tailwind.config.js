/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./src/index.html"],
  theme: {
    extend: {
      colors: {
        lightGray: "#f8f9fa",
      },
      backgroundImage: {
        bgDesktop: "url(images/homepage-bg.jpg)",
        bgMobile: "url(images/homepage-bg-mobile.jpg)",
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
