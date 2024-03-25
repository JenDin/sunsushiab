/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./src/index.html"],
  theme: {
    extend: {
      colors: {
        lightGray: "#f8f9fa",
      },
      backgroundImage: {
        frontPage:
          "url(https://images.unsplash.com/photo-1624904025431-d905ca1ba91e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
