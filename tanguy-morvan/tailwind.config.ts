import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    colors: {
      "primary-dark": "#040404",
      "primary-light": "#F4F4F4",
      "secondary-dark": "#181818",
      "secondary-light": "#444444"
    },
    textColor: {
      dark: "#040404",
      light: "#F4F4F4",
    },
    fontFamily: {
      sans: ['var(--font-antiquelegacy)']
    },
  },
  plugins: [],
} satisfies Config;
