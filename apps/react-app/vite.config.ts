import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vanillaExtractPlugin(),
    // shared의 tsconfig.json에 별칭 경로를 등록시 소비자용 앱에서는 인식하지 못함
    // 따라서 vite-tsconfig-paths 을 사용해 수동으로 등록하지 않아도 해석 가능
    tsconfigPaths({ projects: ["../../packages/shared/tsconfig.json"] }),
  ],
  resolve: {
    alias: {
      "@monorepo-pnpm/shared": path.resolve(
        __dirname,
        "../../packages/shared/src/index.ts"
      ),
    },
  },
});
