## Monorepo by pnpm

프로젝트 수행기간: 2024-05-12 ~

## 사용기술

- pnpm

## 아키텍쳐

```
root/
├── apps/
│ ├── react-apps
| ├── ...
├── packages/
│ ├── shared
│ ├── utils
├── pnpm-workspace.yaml
├── tsconfig.base.json
```

**apps** - 소비자용 프로젝트

**packages/shared** - 재사용 컴포넌트 (ex. Button, Typography, ...)

**packages/utils** - 재사용 로직

**pnpm-workspace** - pnpm workspace 등록 파일 (apps, packages 등록)

**tsconfig.base.json** - 각 프로젝트별 기본 ts 컴파일 설정

## 주요기능

### 1. pnpm의 빠른 속도, 효율적인 방식의 패키지 관리

pnpm은 `package.json`에 명시된 패키지를 읽은 후 `node_moduels`에 symbolic Link(symlink)을 생성하여 전역 저장소의 해당 패키지를 참조하여 disk 낭비를 줄입니다.

### 2. 간단한 모노레포 설정

pnpm-workspace는 간단하게 모노레포 설정을 할 수 있습니다. `pnpm-workspcae.yaml` 파일에 모노레포를 적용할 폴더를 명시하고 `package.json`에 간단한 설정을 해 주면 끝입니다. 만들어진 패키지들은 자동으로 링크되기에 별도로 설치나 연결해줄 필요가 없습니다.

### 설치 및 사용방법

### 1. git clone

```
git clone https://github.com/hansolc/monorepo-pnpm.git
```

### 2. 배포 프로젝트 설정

apps 폴더 내에 프로젝트를 추가합니다(CRA or Vite 사용 가능). 재사용 컴포넌트를 사용하려면 `package.json` 파일에 `@monorepo-pnpm/shared: workspace:*`을 추가합니다.

### 3. 재사용 컴포넌트 추가

`packages/shared` 의 `component` 파일에 각 프로젝트마다 재사용할 컴포넌트를 추가합니다. 추가후, index.ts 파일에 export해주세요.

## 패키지 수정 시 앱에서 즉시 반영되도록 Vite HMR 설정하기

### With React-Vite

> 모노레포 환경에서 packages 디렉토리의 컴포넌트 또는 유틸 함수를 수정한 후, apps 프로젝트에서 직접 빌드하여 확인하는 과정은 번거롭고 비효율적입니다.
> 이를 개선하기 위해, Vite 환경에서 개발 중 변경 사항을 실시간으로 반영할 수 있도록 설정이 필요합니다.

### `vanilla-extract` 플러그인 추가(컴포넌트 사용시) & `resolve.alias`로 패키지 참조 연결 (in `vite.config.ts`)

- 공유 컴포넌트의 스타일이 vanilla-extract/css를 사용하고 있어, 실시간 반영을 위해 Vite 플러그인 등록이 필요합니다.

- resolve.alias 내에 실제 사용하는 경로 및 이름에 맞게 조정해 주세요.

이 설정을 통해 해당 경로의 소스 코드를 직접 참조하게 되어, 빌드 없이 변경사항을 바로 확인할 수 있습니다.

```
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@packages/shared": path.resolve(
        __dirname,
        "../../packages/shared/src/index.ts"
      ),
    },
  },
});

```
