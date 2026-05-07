module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "# 9aff3c",
      },
      zIndex: { 9999: "9999" },
    },
    fontFamily: {
      body: ["Geologica"],
    },
  },
  plugins: [],
};
