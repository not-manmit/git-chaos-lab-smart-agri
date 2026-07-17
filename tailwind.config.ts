import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        soil: "#8B5E34",
        crop: "#2F855A",
        market: "#2563EB"
      }
    }
  },
  plugins: []
};

export default config;
