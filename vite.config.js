import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/portafolio.github.io/",
    plugins: [react()],
    build: {
        rollupOptions: {
          input: './index.html',
        }
      }
});
