# Monorepo by pnpm

## 🛠️ 사용기술

- pnpm
- vite
- storybook

## 🏗️ 아키텍쳐

![모노레포 구조](./public/structure.PNG)

- **apps/** – 배포용 프로젝트
- **pnpm-workspace.yaml** – `pnpm` 워크스페이스 설정 파일 (`apps/`, `packages/` 경로 포함)
- **tsconfig.base.json** – 각 프로젝트에서 공통으로 사용하는 TypeScript 설정
- **packages/shared/** – 재사용 가능한 컴포넌트, Material Design 3 기반 UI 컴포넌트 제공

> **공유 컴포넌트 구조 및 빌드 방식**

- `vite`를 사용해 빌드하며, `build.lib.entry` 옵션을 통해 `client`, `server`로 분리된 엔트리 파일로 빌드합니다.
- Next.js의 Client/Server 컴포넌트 구조를 고려하여 컴포넌트를 나눴습니다.
- `rollupOptions`를 통해 `react`, `react-dom`, `storybook` 관련 파일은 외부 의존성으로 처리되어 번들링에서 제외됩니다.
- Storybook은 개발 및 문서화를 위한 용도로 `shared` 패키지에서 개별적으로 빌드/실행됩니다.

## ✨ Why PNPM

### 1. pnpm의 빠른 속도, 효율적인 방식의 패키지 관리

pnpm은 `package.json`에 명시된 패키지를 읽은 후 `node_moduels`에 symbolic Link(symlink)을 생성하여 전역 저장소의 해당 패키지를 참조하여 disk 낭비를 줄입니다.

### 2. 간단한 모노레포 설정

pnpm-workspace는 간단하게 모노레포 설정을 할 수 있습니다. `pnpm-workspcae.yaml` 파일에 모노레포를 적용할 폴더를 명시하고 `package.json`에 간단한 설정을 해 주면 끝입니다. 만들어진 패키지들은 자동으로 링크되기에 별도로 설치나 연결해줄 필요가 없습니다.

## 📦 설치 및 사용방법

### 1. git clone

```
git clone https://github.com/hansolc/monorepo-pnpm.git
```

### 2. 배포 프로젝트 설정

`apps/` 폴더 내에 프로젝트를 생성하고, `@monorepo-pnpm/shared: workspace:*`를 `package.json`에 추가하여 공유 컴포넌트를 사용할 수 있습니다.

### 3. 재사용 컴포넌트 추가

`packages/shared/(server|client)/index.ts` 파일에 각 프로젝트마다 재사용할 컴포넌트를 추가하여 `export` 해야합니다.

### 4. Storybook 실행

컴포넌트 이해를 돕기 위해 packages/shared 디렉토리에서 다음 명령어로 실행합니다:

```
pnpm dev:shared-stories
```

---

## ♻️ 앱 프로젝트 개발 시 Vite 설정 (HMR 적용)

### 문제

모노레포 환경에서는 packages/ 디렉토리의 파일을 수정했을 때, 앱 프로젝트(apps/)에서 이를 실시간으로 반영(HMR)하려면 별도 설정이 필요합니다.

### 해결방법

### 1.Vite 설정 (apps/react-app/vite.config.ts)

```
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@monorepo-pnpm/shared": path.resolve(
        __dirname,
        "../../packages/shared/src/index.ts"
      ),
    },
  },
});

```

- `vanillaExtractPlaugin` 추가(shared 컴포넌트는 vailla-extract/css로 스타일링 되었습니다.)
- `resolve.alias`에 실제 컴포는 export 파일 등록

### 2. 앱 tsconfig 설정 (apps/react-app/tsconfig.json)

```
// tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": ["src"],
  "references": [{ "path": "../../packages/shared" }]
}
```

- `noEmit: true` : JS 파일을 출력하지 않고 타입 검사만 수행
- `references` : 프로젝트 간 의존성 선언 및 빌드 순서 보장
- `extends` : 공통 TS 빌드 설정
