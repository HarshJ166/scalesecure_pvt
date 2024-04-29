import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    filter: {
      invert: "invert(1)",
    },

    flexGrow: {
      2: "2",
    },

    boxShadow: {
      input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
    },

    fontFamily: {
      body: ["SharpGrotesk", "sans-serif"],
      para: ["Messina", "sans-serif"],
    },
  },
  animation: {
    "loop-scroll": "loop-scroll 50s linear infinite",
    "infinite-scroll":
      "infinite-scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
  },
  keyframes: {
    "loop-scroll": {
      from: { transform: "translateX(0)" },
      to: { transform: "translateX(-100%)" },
    },
    "infinite-scroll": {
      to: { transform: "translate(calc(-50% - 0.5rem))" },
    },
  },
};
export const plugins = [addVariablesForColors];

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
