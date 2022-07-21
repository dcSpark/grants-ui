import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "lib",
      fileName: "lib",
      formats: ["es", "cjs"],
    },
  },
  plugins: [react()],
});
