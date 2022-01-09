module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      keyframes: {
        "spin-1": {
          "0%": {
            transform: "rotate(90deg)",
          },
          "100%": {
            transform: "rotate(450deg)",
          },
        },
        "spin-2": {
          "0%": {
            transform: "rotate(-50deg)",
          },
          "100%": {
            transform: "rotate(310deg)",
          },
        },
        "spin-3": {
          "0%": {
            transform: "rotate(220deg)",
          },
          "100%": {
            transform: "rotate(580deg)",
          },
        },
        "spin-4": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "spin-5": {
          "0%": {
            transform: "rotate(-100deg)",
          },
          "100%": {
            transform: "rotate(260deg)",
          },
        },
        "spin-6": {
          "0%": {
            transform: "rotate(210deg)",
          },
          "100%": {
            transform: "rotate(570deg)",
          },
        },
      },
      transitionTimingFunction: {
        "in-base": "cubic-bezier(0.2, 1, 0.25, 1)",
      },
      animation: {
        "spin-1": "spin-1 12s ease-in-out infinite",
        "spin-2": "spin-2 16s ease-in-out infinite",
        "spin-3": "spin-3 8s ease-in-out infinite",
        "spin-4": "spin-4 6s ease-in-out infinite",
        "spin-5": "spin-5 12s ease-in-out infinite",
        "spin-6": "spin-6 10s ease-in-out infinite",
      },
      backgroundImage: {
        "spoty-light-logo": "url(/spotify-logo.png)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
