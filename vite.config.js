import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs/promises";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-htaccess",
      async writeBundle() {
        try {
          await fs.copyFile(".htaccess", "dist/.htaccess");
          console.log(".htaccess file copied successfully");
        } catch (error) {
          console.error("Error copying .htaccess:", error);
        }
      },
    },
  ],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
});
