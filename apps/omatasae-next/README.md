## 일본 음식점 예약 플랫폼

이 프로젝트는 기존 [일본 음식점 예약 플랫폼](https://github.com/hansolc/omatasae-japan-restaurant-reservation-service)의 서버가 종료됨에 따라, **Next.js의 App Router와 API Routes**를 활용해 **Serverless 환경**으로 재구축한 버전입니다.  
디자인 시스템은 모노레포 형태의 shared 컴포넌트를 적용하여 개발 효율성과 일관성을 높였습니다.

배포 링크: https://monorepo-pnpm-omatasae-next.vercel.app/

## 🛠️ 사용기술

- **Frontend**: Next.js (v14 App Router), Tailwind CSS
- **상태 관리**: Recoil, TanStack Query
- **Database**: MongoDB Atlas + Mongoose
- **컴포넌트**: `@monorepo-pnpm/shared` (Material Design 3 기반 UI 시스템)
- **패키지 관리**: pnpm (Monorepo)

## ✨ 주요기능

### 1. 로그인/로그아웃 기능

- `mongoose`로 정의된 User 스키마를 기반으로 `src/api/users`에 API Routes 구현
- 로그인 성공 시 JWT 토큰을 쿠키에 저장
- 최상위 `layout.tsx`에서 토큰 유효성을 검사하여 `userState`(recoil)에 저장 → 로그인 유지
- 로그인/회원가입/로그아웃 로직은 `useLogin`, `useRegistration`, `useLogout` 커스텀 훅으로 분리하여 관리

### 2. 예약 정보 검증

- [ReservationForm 컴포넌트](https://github.com/hansolc/monorepo-pnpm/blob/main/apps/omatasae-next/src/components/ReservationForm/index.tsx)에서 예약 정보를 입력
- 입력 필드는 모두 `@monorepo-pnpm/shared` 패키지의 **Material Design 3 기반 TextField** 사용
- 성능 최적화를 위해 Uncontrolled 방식으로 구현:
  - `useFormValidation` 훅을 통해 각 필드의 `register`, `errors`, `handleSubmit` 관리
  - 필수 여부 및 정규식 패턴 검증 지원
- 최대 3개의 날짜/시간을 입력할 수 있도록 설계
- **비로그인 상태에서 예약 시** 입력한 데이터는 LocalStorage에 저장 → 로그인 후 자동 예약 시도

### 3. 예약 조회

- `/reservations` 페이지에서 전체 예약 내역 조회 가능
- 현재는 로그인 여부와 관계없이 모든 예약 데이터 출력 (향후 사용자별 필터링 가능성 고려)
- 예약 조회 UI에도 재사용 가능한 shared 컴포넌트를 사용하여 일관된 스타일 적용

## 📝 향후 개선 사항

- 사용자 예약 승인
- 관리자용 대시보드 및 예약 승인 시스템
