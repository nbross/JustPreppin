module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#191d2b",
        secondary: "#FF9900",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
