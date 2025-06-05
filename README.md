## Monorepo by pnpm

### 모노레포란?

> 다수의 프로젝트를 한 개의 레포지토리 내에서 관리하는 소프트웨어 개발 전략 - wikipedia

기존 멀티레포 환경에서는 유사한 기능의 컴포넌트나 UI를 프로젝트 간에 복사·붙여넣는 방식으로 공유하게 되어, 유지보수성과 생산성에 한계를 느꼈습니다. 또한 tsconfig.json, ESLint, Prettier 등의 설정을 매번 프로젝트마다 반복해서 구성해야 하는 비효율도 존재했습니다.

이러한 문제를 해결하기 위해 모노레포 구조를 도입하였고, 패키지 매니저로는 빠른 설치 속도와 workspace 최적화에 강점을 지닌 pnpm을 선택했습니다.

현재 이 프로젝트는 다음과 같이 구성되어 있습니다:

- apps: 실제 배포 대상 애플리케이션
- packages: shared(재사용 UI 컴포넌트), utils(공통 유틸리티 함수)

특히 shared 패키지에서는 Material Design 3 가이드에 기반해 컴포넌트를 설계하고 있으며, 재사용성과 확장성을 고려하여 최대한 **headless** UI 방식으로 구성하고 있습니다. 또한 **Compound Pattern**을 활용해 유연하고 일관된 컴포넌트 구조를 구현하고 있습니다.

## 🛠️ 사용기술

- pnpm
- vite
- storybook

## 🏗️ 아키텍쳐

```
root/
├── apps/
│ ├── react-apps
| ├── ...
├── packages/
│ ├── shared
|   |── components
|   |── frameworks
│ ├── utils
├── pnpm-workspace.yaml
├── tsconfig.base.json
```

**apps** - 소비자용 프로젝트

**packages/shared** - 재사용 컴포넌트

- **components** - 사용자 상호작용 컴포넌트
- **frameworks** - 데이터, UI 컴포넌트

**packages/utils** - 재사용 로직

**pnpm-workspace** - pnpm workspace 등록 파일 (apps, packages 등록)

**tsconfig.base.json** - 각 프로젝트별 기본 ts 컴파일 설정

## ✨ 주요기능

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

apps 폴더 내에 프로젝트를 추가합니다(CRA or Vite 사용 가능). 재사용 컴포넌트를 사용하려면 `package.json` 파일에 `@monorepo-pnpm/shared: workspace:*`을 추가합니다.

### 3. 재사용 컴포넌트 추가

`packages/shared` 의 `component` 파일에 각 프로젝트마다 재사용할 컴포넌트를 추가합니다. 추가후, index.ts 파일에 export해주세요.

### 4. Storybook 실행

`packages/shared`의 컴포넌트 이해를 위해 storybook은 `dev:shared-stories`로 실행해주세요.

---

# ♻️ 주요기능

## 공유 패키지 수정 시 Vite에서 실시간 반영(HMR) 설정

### 배포(apps/) 프로젝트내 vite.config.ts 설정

모노레포 환경에서는 `packages/` 디렉토리의 컴포넌트나 유틸 함수를 수정할 때,  
`apps/` 프로젝트에서 매번 별도 빌드 없이 즉시 반영되어야 개발 효율이 높아집니다.

이를 위해 Vite 개발 서버에서는 다음 두 가지 설정이 필요합니다:

1. `vanilla-extract`를 사용하는 공유 컴포넌트에 대한 스타일 처리
2. 직접 소스 파일을 참조하도록 하는 `resolve.alias` 설정

### Vite 설정 (apps/react-app/vite.config.ts)

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

- `vanillaExtractPlaugin` 추가
- `resolve.alias`에 실제 컴포는 export 파일 등록

### 1. 루트 tsconfig.json 설정

- 모노레포 내 각 프로젝트를 TypeScript가 인식하고 올바른 빌드 순서를 보장하도록 설정합니다.
- packages에 프로젝트가 추가될 경우 이곳에 명시하세요

```
{
  "files": [],
  "references": [{ "path": "apps/react-app" }, { "path": "packages/shared" }]
}
```

### 2. 앱 프로젝트(tsconfig.json)

앱은 shared를 참조하므로 아래와 같이 references를 명시해 타입 의존성과 빌드 순서를 정의합니다.

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

- `noEmit: true`는 앱에서는 JS나 타입 파일을 출력하지 않고 타입 검사만 수행하기 위한 설정입니다.

### 3. packages내의 프로젝트 필수설정(composite:true)

공유 패키지인 shared는 다른 프로젝트에서 참조되기 때문에 `composite: true`가 필요하며,
이는 이미 공통 설정(tsconfig.base.json)에서 설정되어 있어 별도의 설정은 필요하지 않습니다.
