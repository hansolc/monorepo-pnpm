"use client";

import React from "react";
import { Appbar } from "@monorepo-pnpm/shared/client";
import Link from "next/link";

function HomeHeader() {
  return (
    <Appbar
      headline="오마타세"
      size="sm"
      trailingIcon={[
        <Login key={"omatasae-login"} />,
        <Register key={"omatasae-registration"} />,
      ]}
    />
  );
}

function Login() {
  return (
    <Link href={"/login"} className="cursor-pointer">
      로그인
    </Link>
  );
}

function Register() {
  return (
    <Link href={"/signup"} className="cursor-pointer">
      회원가입
    </Link>
  );
}

export default HomeHeader;
