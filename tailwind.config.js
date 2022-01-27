const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Major Mono Display", ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        "prussian-blue": "#0b3954",
        "ukranian-blue": {
          DEFAULT: "#a3d9ff",
          50: "#a3d9ff80",
        },
        "rich-black": "#020204",
        glassy: {
          0: "#ffffff00",
          10: "#ffffff1a",
          20: "#ffffff33",
          25: "#ffffff40",
          40: "#ffffff66",
          50: "#ffffff80",
        },
        "glassy-dark": {
          10: "#0000001a",
          20: "#00000033",
        },
        spotify: {
          DEFAULT: "#1db954",
          10: "#1db9541a",
          50: "#1db95480",
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
          xl: "3.5rem",
          "2xl": "4rem",
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
        noise: "url(/svg/noise.svg)",
      },
      boxShadow: {
        glassy: "0px 1px 24px -1px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
