// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
  build: {
    lib: {
      entry: {
        client: "src/client/index.ts",
        server: "src/server/index.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
        },
        // {
        //   format: "cjs",
        //   entryFileNames: "[name].cjs",
        // },
      ],
      external: [
        "react",
        "react-dom",
        path.resolve(__dirname, "src/test/**"),
        /\.stories\.(ts|tsx)$/,
        /\.mdx$/,
      ],
    },
  },
  // 소비자앱에서 storybook 관련 코드를 컴파일 하지 않으려 설정했지만
  // storybook 에서 unexpected error "{" 에러 발생
  // esbuild: {
  //   exclude: /\.stories\.(t|j)sx?$/, // stories 파일 제외
  // },
});
