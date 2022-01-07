module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-base": "cubic-bezier(0.2, 1, 0.25, 1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
