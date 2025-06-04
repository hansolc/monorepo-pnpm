// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@frameworks": path.resolve(__dirname, "./src/frameworks/"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // 진입점
      name: "SharedComponents",
      formats: ["es", "cjs"], // 원하는 모듈 형식
      fileName: (format) => `shared.${format}.js`,
    },
    rollupOptions: {
      // 외부 의존성 처리 (예: react는 번들에 포함하지 않음)
      // 이미 사용하는 프로젝트가 react 기반이라면 react을 포함하지 않음
      external: ["react", "react-dom", path.resolve(__dirname, "src/test/**")],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  // 소비자앱에서 storybook 관련 코드를 컴파일 하지 않으려 설정했지만
  // storybook 에서 unexpected error "{" 에러 발생
  // esbuild: {
  //   exclude: /\.stories\.(t|j)sx?$/, // stories 파일 제외
  // },
});
