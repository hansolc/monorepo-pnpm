"use client";

import React from "react";
import Link from "next/link";
import useLogout from "@/hooks/useLogout";
import { Typography } from "@monorepo-pnpm/shared/server";
import { useRecoilValue } from "recoil";
import { userState } from "@/lib/recoil/atoms/user";
import Appbar from "@/components/Appbar";

function HomeHeader() {
  return (
    <Appbar
      headline="오마타세"
      size="sm"
      trailingIcon={[
        <HeaderLink key={"omatasae-login"} href="login" text="로그인" />,
        <HeaderLink
          key={"omatasae-registration"}
          href="signup"
          text="회원가입"
        />,
        <HeaderLink
          key={"omatasae-reservation"}
          href="reservation/verify"
          text="예약확인"
        />,
        <HeaderLink key={"omatasae-logout"} href="logout" text="로그아웃" />,
      ]}
    />
  );
}

function HeaderLink({
  href,
  text,
}: {
  href: "login" | "signup" | "reservation/verify" | "logout";
  text: string;
}) {
  const { logout } = useLogout();
  const user = useRecoilValue(userState);

  if (user && (href === "login" || href === "signup")) return null;
  if (!user && (href === "reservation/verify" || href === "logout"))
    return null;

  return (
    <>
      {href !== "logout" ? (
        <Link href={`/${href}`}>{text}</Link>
      ) : (
        <Typography
          aria-label="loggout"
          variants="body"
          size="lg"
          key={"omatasae-logout"}
          onClick={async () => {
            try {
              await logout();
            } catch (error: unknown) {
              if (error instanceof Error) {
                alert(error.message);
              }
            }
          }}
          className="w-auto! text-black! cursor-pointer"
        >
          로그아웃
        </Typography>
      )}
    </>
  );
}

export default HomeHeader;
