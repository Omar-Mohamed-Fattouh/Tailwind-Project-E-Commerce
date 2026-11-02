/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      colors: {
        ink: "#050605",
        forest: "#0E1A12",
        volt: "#B6FF3C",
        moss: "#8AA388",
        fog: "#E7F0E3",
        "slate-gray": "#6D6D6D",
        "white-400": "rgba(231, 240, 227, 0.78)",
      },
      boxShadow: {
        "3xl": "0 18px 50px rgba(182, 255, 60, 0.12)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 72% 38%, #1c3d22 0%, #050605 58%)",
        card: "radial-gradient(circle at 50% 45%, #234528 0%, #0c120e 72%)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
