"use client";

import { Appbar } from "@monorepo-pnpm/shared/client";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";

function LoginHeader() {
  return (
    <Appbar
      headline="로그인"
      size="md"
      leadingIcon={[
        <MdArrowBackIos
          key={`Appbar-arrow-back`}
          onClick={() => window.history.back()}
        />,
      ]}
    />
  );
}

export default LoginHeader;
