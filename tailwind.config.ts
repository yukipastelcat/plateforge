import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        canvas: "var(--color-canvas)",
        frame: "var(--color-frame)",
        accent: "var(--color-accent)",
      },
    },
  },
};
