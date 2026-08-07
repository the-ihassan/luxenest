import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        charcoal: "#1A1A1A",
        stone: "#8C8578",
        beige: "#F5EFE6",
        cream: "#FBF8F3",
        gold: {
          DEFAULT: "#C6A45C",
          light: "#E4CB94",
          dark: "#9C7C3D",
        },
        line: "#E7DFD2",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1320px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        lineGrow: "lineGrow 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
