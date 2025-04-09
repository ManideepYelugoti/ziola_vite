import react from "@vitejs/plugin-react";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // ⬅️ @ maps to /src
      },
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  build: {
    outDir: "./build",
    emptyOutDir: true,
  },

  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
 
});
