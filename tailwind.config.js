/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      mainPurple: "#715CF6",
      lightestPurple: "#F1CCF6",
      lightPurple: "#C2AED1",
      mediumPurple: "#514982",
      darkPurple: "#332D54",
      darkGreyPurple: "#6C6886",
      greyPurple: "#EAEAF6",
      lightGreyPurple: "#F4F4FA",
      white: "#FFF",
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      rubik: ["Rubik"],
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      boxShadow: {
        purpleFrame: "0px 3px 0px 0px #715CF6 inset",
      },
    },
  },
  plugins: [],
};
