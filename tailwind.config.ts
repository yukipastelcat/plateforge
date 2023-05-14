import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        parentBg: "var(--color-parentBg)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        border: "var(--color-border)",
      },
    },
  },
};
