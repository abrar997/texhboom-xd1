/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#55C6F5",
        secondary: "#5B5E76",
        gray: "#5B5E76",
        border: "#A2B1CB",
        footer: "#D4E0F6",
      },
      backgroundColor: {
        primary: "#ECF3FD",
        secondary: "#ECF0F3",
        icon: "#ECF0F3",
      },
       screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

    },
  },
  plugins: [],
};
