import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6E3D2",
        butter: "#FCE2C2",
        peach: "#EAB583",
        coral: "#E88079",
        rose: "#D9666E",
        plum: "#876186",
        cocoa: "#5A3A38",
        sand: "#EFD7C0",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(90, 58, 56, 0.12)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      backgroundImage: {
        bodyWash:
          "radial-gradient(circle at 20% 10%, rgba(232,128,121,0.12), transparent 24%), radial-gradient(circle at 85% 20%, rgba(135,97,134,0.10), transparent 18%), radial-gradient(circle at 30% 80%, rgba(234,181,131,0.10), transparent 20%), radial-gradient(circle at 80% 85%, rgba(114,130,150,0.10), transparent 18%)",
      },
    },
  },
  plugins: [],
};

export default config;
