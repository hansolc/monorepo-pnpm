// packages/shared/tsup.config.ts
import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
      base: "src/base/index.ts",
      md3: "src/md3/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: false,
    external: ["react", "react-dom"],
    tsconfig: "./tsconfig.json",
    esbuildPlugins: [vanillaExtractPlugin()],
  },
]);
