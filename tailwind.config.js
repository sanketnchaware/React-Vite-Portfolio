/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themebg1: "#292F36",
        themebg2: "#1A1E23",
        brand2: "#98FAEC",
        brand1: "#12F7D6",
      },
      backgroundImage: {
        about_bg: "url('/public/images/about_bg.svg')",
        skills_bg: "url('/public/images/skills_bg.svg')",
      },
    },
  },
  plugins: [],
};
