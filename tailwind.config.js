const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        // sans: ["Major Mono Display", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "14xl": "12rem",
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
          5: "#ffffff0d",
          10: "#ffffff1a",
          20: "#ffffff33",
          25: "#ffffff40",
          40: "#ffffff66",
          50: "#ffffff80",
          60: "#ffffff99",
          70: "#ffffffb3",
          90: "#ffffffe6",
        },
        "glassy-dark": {
          10: "#0000001a",
          20: "#00000033",
          80: "#000000cc",
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
        "movement-1": {
          "0%, 100%": {
            transform: "translateX(0)",
            transform: "translateY(0)",
          },
          "20%": {
            transform: "translateX(20px)",
            transform: "translateY(30px)",
          },
          "40%": { transform: "translateX(30px) scale(0.95)" },
          "60%": {
            transform: "translate(-30px, -20px) scale(0.85)",
          },
          "80%": { transform: "translateX(15px) scale(0.95)" },
        },
        "movement-2": {
          "0%, 100%": {
            transform: "translateX(0)",
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateX(15px)",
            transform: "translateY(-15px)",
          },
          "50%": { transform: "translateX(30px)" },
          "75%": {
            transform: "translateX(-15px)",
            transform: "translateY(15px)",
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
        "movement-1": "movement-1 15s ease 0s infinite normal forwards",
        "movement-2": "movement-2 15s ease 0s infinite normal forwards",
      },
      backgroundImage: {
        "spoty-light-logo": "url(/spotify-logo.png)",
        noise: "url(/svg/noise.svg)",
        fade: "linear-gradient(180deg, rgba(255,255,255,0) 20%, rgba(0,0,0,1) 40%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        glassy: "0px 1px 24px -1px",
        sphere:
          "inset -25px -15px 40px rgb(0 0 0 / 60%), inset 25px 15px 40px rgb(255 255 255 / 35%)",
        fade: "0px -10px 20px 20px rgb(0 0 0), inset 0px -20px 20px 0px rgb(0 0 0)",
        neumorphic:
          "8px 8px 20px rgb(0 0 0 / 50%), -8px -8px 20px rgb(90 90 90 / 40%)",
        neumorphicHover:
          "8px 8px 20px rgb(0 0 0 / 50%), -8px -8px 20px rgb(255 255 255 / 20%), inset 8px 8px 20px rgb(0 0 0), inset -8px -8px 20px rgb(255 255 255 / 20%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
