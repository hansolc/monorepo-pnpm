"use client";

import React from "react";
import { Appbar } from "@monorepo-pnpm/shared/client";

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
  return <div className="cursor-pointer">로그인</div>;
}

function Register() {
  return <div className="cursor-pointer">회원가입</div>;
}

export default HomeHeader;
