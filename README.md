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

`packages/shared` 의 `component` 파일에 각 프로젝트마다 재사용할 컴포넌트를 추가합니다. 추가후, index.ts 파일에 export 을 명시하고 `pnpm build:shared`을 실행합니다.
