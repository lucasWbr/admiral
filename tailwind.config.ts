import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      gloock: ["Gloock"],
      archivoRegular: ["Archivo Narrow Regular"],
      archivoBold: ["Archivo Narrow Bold"],
      archivoSemiBold: ["Archivo Narrow SemiBold"],
      archivoItalic: ["Archivo Narrow Italic"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenDark: "#202814",
        greenLight: "#AFCC81",
      },
    },
  },
  plugins: [],
};
export default config;
