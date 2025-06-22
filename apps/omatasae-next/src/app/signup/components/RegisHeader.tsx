"use client";

import { Appbar } from "@monorepo-pnpm/shared/client";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";

function RegisHeader() {
  return (
    <Appbar
      headline="회원가입"
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

export default RegisHeader;
