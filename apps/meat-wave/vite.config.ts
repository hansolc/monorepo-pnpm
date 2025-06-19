import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vanillaExtractPlugin(),
    tsconfigPaths({ projects: ["../../packages/shared/tsconfig.json"] }),
  ],
  resolve: {
    alias: {
      "@monorepo-pnpm/shared": path.resolve(
        __dirname,
        "../../packages/shared/src"
      ),
    },
  },
});
