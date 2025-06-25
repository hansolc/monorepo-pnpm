"use client";

import { userState } from "@/lib/recoil/atoms/user";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import { Typography } from "@monorepo-pnpm/shared/server";
import useLogout from "@/hooks/useLogout";

export default function HeaderActions() {
  const user = useRecoilValue(userState);
  const { logout } = useLogout();

  if (user) {
    return (
      <>
        <Link href="/reservations" key="omatasae-reservations-verify">
          예약확인
        </Link>
        <Typography
          aria-label="logout"
          variants="body"
          size="lg"
          key={"omatasae-logout"}
          onClick={logout}
          className="cursor-pointer"
        >
          로그아웃
        </Typography>
      </>
    );
  } else {
    return (
      <>
        <Link key={"omatasae-login"} href="login">
          로그인
        </Link>
        <Link key={"omatasae-registration"} href="signup">
          회원가입
        </Link>
      </>
    );
  }
}
