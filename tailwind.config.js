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
        },
      },
    },
  },
  plugins: [],
};
