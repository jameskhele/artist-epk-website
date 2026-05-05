import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#111114",
        surfaceAlt: "#16161B",
        line: "#23232B",
        text: "#FFFFFF",
        muted: "#B8B8C2",
        teal: "#00E5D1",
        pink: "#FF2D87",
        purple: "#B026FF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      backgroundImage: {
        "neon-gradient":
          "linear-gradient(90deg, #FF2D87 0%, #B026FF 50%, #00E5D1 100%)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
