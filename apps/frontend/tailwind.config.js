import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Audiowide', 'sans-serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      // Vintage theme with warm paper-like backgrounds and readable contrast
      defaultTheme: "light",
      layout: {
        disabledOpacity: "0.4",
        radius: {
          small: "6px",
          medium: "10px",
          large: "14px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
      themes: {
        light: {
          colors: {
            // Base surfaces
            background: "#FAF3E0",
            foreground: "#1F1A14",
            content1: "#FFF9ED",
            content2: "#F5E9D6",
            content3: "#EBDDC5",
            content4: "#E0D2B8",
            divider: "#E6DDC6",
            focus: "#2CA7A5",

            // Neutral default
            default: {
              DEFAULT: "#D7C7A9",
              foreground: "#1F1A14",
            },

            // Brand & semantic colors
            primary: {
              DEFAULT: "#D4A017", // vintage gold
              foreground: "#1F1A14",
            },
            secondary: {
              DEFAULT: "#B35C6A", // rosewood
              foreground: "#FFFFFF",
            },
            success: {
              DEFAULT: "#5B8A72", // olive green
              foreground: "#FFFFFF",
            },
            warning: {
              DEFAULT: "#D97706", // amber
              foreground: "#1F1A14",
            },
            danger: {
              DEFAULT: "#9F3E2C", // brick red
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            // Base surfaces
            background: "#12110F",
            foreground: "#E8DFC8",
            content1: "#1B1A17",
            content2: "#23211D",
            content3: "#2B2924",
            content4: "#343129",
            divider: "#2A2823",
            focus: "#66C2BD",

            // Neutral default
            default: {
              DEFAULT: "#3A362E",
              foreground: "#E8DFC8",
            },

            // Brand & semantic colors
            primary: {
              DEFAULT: "#C79A2B", // deeper gold for dark
              foreground: "#0D0C0A",
            },
            secondary: {
              DEFAULT: "#B14B72",
              foreground: "#FFFFFF",
            },
            success: {
              DEFAULT: "#7C9A4B",
              foreground: "#0D0C0A",
            },
            warning: {
              DEFAULT: "#E0A72C",
              foreground: "#0D0C0A",
            },
            danger: {
              DEFAULT: "#C7463B",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};
