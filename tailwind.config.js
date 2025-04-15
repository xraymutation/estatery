/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          0: "#FFFFFF",
          200: "#EAECF4",
          300: "#D6D8E5",
          400: "#717788",
          600: "#7B8191",
          1000: "#000000",
        },
        opacity: {
          0: "0",
          10: "0.1",
          20: "0.2",
          30: "0.3",
          40: "0.4",
          50: "0.5",
          60: "0.6",
          70: "0.7",
          80: "0.8",
          90: "0.9",
          100: "1",
        },
        text: {
          accent: "#6851FF",
          paragraph: "#B5B8CB",
        },
        secondary: {
          0: "#EDEAFF",
          "0-light": "rgba(237, 234, 255, 0.2)",
          100: "#8B8AFF",
          200: "#3D1EFE",
          "200-light": "rgba(61, 30, 254, 0.2)",
          300: "#6851FF",
          600: "#3D1EFE",
          700: "#3D1EFE",
          800: "#3118D6",
          1000: "#2511AE",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: [
          "source-code-pro",
          "Menlo",
          "Monaco",
          "Consolas",
          "Courier New",
          "monospace",
        ],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      fontWeight: {
        normal: "500",
        bold: "700",
      },
      fontSize: {
        h1: [
          "64px",
          {
            lineHeight: "110%",
            letterSpacing: "-1%",
            fontWeight: "700",
          },
        ],
        "h1-mobile": [
          "40px",
          {
            lineHeight: "110%",
            letterSpacing: "-1%",
            fontWeight: "700",
          },
        ],
        h2: [
          "40px",
          {
            lineHeight: "140%",
            letterSpacing: "-1%",
            fontWeight: "700",
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "125%",
            letterSpacing: "-1%",
            fontWeight: "700",
          },
        ],
        h4: [
          "24px",
          {
            lineHeight: "150%",
            letterSpacing: "-1%",
            fontWeight: "700",
          },
        ],
        "body-md-bold": [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0%",
            fontWeight: "700",
          },
        ],
        "body-md-regular": [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
        "body-md-regular-160": [
          "16px",
          {
            lineHeight: "160%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
        "body-md-medium": [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0%",
            fontWeight: "500",
          },
        ],
        "body-md-medium-160": [
          "16px",
          {
            lineHeight: "160%",
            letterSpacing: "0%",
            fontWeight: "500",
          },
        ],
        "body-xl-medium": [
          "20px",
          {
            lineHeight: "160%",
            letterSpacing: "-0.5%",
            fontWeight: "500",
          },
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontWeight: "700" },
            h2: { fontWeight: "700" },
            h3: { fontWeight: "700" },
            h4: { fontWeight: "700" },
            a: {
              textDecoration: "none",
              color: "inherit",
            },
          },
        },
      },
      backgroundImage: {
        hero: "url('../public/images/hero-background.png')",
        heroMap: "url('../public/images/map-background.png')",
        testimonials: "url('../public/images/testimonials-background.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
