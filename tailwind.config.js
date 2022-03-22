module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            1: "#5285F2",
            2: "#647AA8",
            3: "#001540",
            4: "#2E6BEF",
            5: "#DEE3FF",
            6: "#F5F6FA",
            7: "#DCE7FA",
            8: "#E5F2FA",
            9: "#B2C5EE",
          },
          black: {
            1: "#000E29",
          },
          green: {
            1: "#25AD25",
          },
          red: {
            1: "#ED0707",
          },
          orange: {
            1: "#FFEFE1",
            2: "#F57200",
          },
        },
      },
    },
  },
  plugins: [],
};
