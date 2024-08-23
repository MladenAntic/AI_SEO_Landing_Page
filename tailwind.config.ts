import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      backgroundImage: {
        "text-radial":
          "radial-gradient(100% 100% at top left, white, white, rgba(74, 32, 138, 0.5))",
        "shining-radial":
          "radial-gradient(50% 50% at 16.8% 18.3%, white, rgb(184, 148, 255) 37.7%, rgb(24, 0, 66) 100%)",
        "purple-radial":
          "radial-gradient(75% 75% at center center, rgba(140, 69, 255, .5) 15%, rgba(14, 0, 36, .5) 78%, transparent)",
        "testimonial-gradient":
          "linear-gradient(to bottom left, rgba(140, 69, 255, .3), black)",
      },
      boxShadow: {
        "planet-glow":
          "-20px -20px 50px rgba(255, 255, 255, 0.5), -20px -20px 80px rgba(255, 255, 255, .1), 0 0 50px rgb(140, 69, 255)",
      },
      maskImage: {
        "hero-gradient":
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        "logos-gradient":
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        "cta-gradient":
          "radial-gradient(50% 50% at 50% 35%, black, transparent)",
        "cta-gradient-hovered":
          "radial-gradient(50% 50% at 0 0, black, transparent)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        ".mask-hero-gradient": {
          "mask-image":
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        },
        ".mask-logos-gradient": {
          "mask-image":
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        },
        ".mask-cta-gradient": {
          "mask-image":
            "radial-gradient(50% 50% at 50% 35%, black, transparent)",
        },
        ".mask-cta-gradient-hovered": {
          "mask-image": "radial-gradient(50% 50% at 0 0, black, transparent)",
        },
      });
    },
  ],
};
export default config;
