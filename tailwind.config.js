/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "hsl(0, 0%, 75%)",
        cyan: "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "boost-desktop": "url('./src/assets/img/bg-boost-desktop.svg')",
        "boost-mobile": "url('./src/assets/img/bg-boost-mobile.svg')",
        "shorted-desktop": "url('./src/assets/img/bg-shorten-desktop.svg')",
        "shorted-mobile": "url('./src/assets/img/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};
