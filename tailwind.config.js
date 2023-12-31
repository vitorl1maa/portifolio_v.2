/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/hero-patteern01.png')",
        "hero-pattern-secundary": "url('/Topology-3.png')",
        "hero-pattern-end": "url('/globo.png')",
        "hero-pattern-profile": "url('/profile_wall.png')",
      },
      colors: {
        primary: "#0f0c17",
        secundary: "#a768fa",
        darkPurble: "rgb(94, 23, 235, 0.3)",
        newOrange: "#E76F64",
      },
    },
  },
  plugins: [],
};
