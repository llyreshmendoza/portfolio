import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#a855f7",
          soft: "#c084fc",
          deep: "#7e22ce",
        },
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#111113",
          card: "#17171a",
          line: "#26262b",
        },
        paper: {
          DEFAULT: "#f7f7f5",
          soft: "#ffffff",
          card: "#ffffff",
          line: "#e4e4e7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
