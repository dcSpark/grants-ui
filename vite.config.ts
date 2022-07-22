import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
const path = require("path");

export default defineConfig(({ command }) => ({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: "main",
      name: "main",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react({
      ...(command === "build"
        ? {
            jsxRuntime: "classic",
          }
        : {}),
    }),
    ...(command === "build" ? [dts({ insertTypesEntry: true })] : []),
  ],
}));
