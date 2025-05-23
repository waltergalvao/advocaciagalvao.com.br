import typographyPlugin from "@tailwindcss/typography";
import typographyStyles from "./typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px 0 red" },
          "50%": { boxShadow: "0 0 20px 5px red" },
        },
      },
      typography: typographyStyles,
      animation: {
        glow: "glow 2s infinite", // Animation duration and loop
      },
      colors: {
        slate: {
          900: "#101D2D",
        },
        blue: {
          500: "#5696FF",
          600: "#2174EA",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "playfair-display": ["var(--font-playfair-display)", "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.01em" }],
        "3xl": ["2rem", { lineHeight: "1.3125", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "6xl": ["4rem", { lineHeight: "1.1562", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
    },
  },
  plugins: [
    typographyPlugin,
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
};
