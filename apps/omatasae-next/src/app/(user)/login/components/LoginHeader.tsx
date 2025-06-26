import Appbar from "@/components/Appbar";
import ArrowBackButton from "@/components/Icons/ArrowBack";
import React from "react";

function LoginHeader() {
  return (
    <Appbar
      headline="로그인"
      size="md"
      leadingIcon={[<ArrowBackButton key={`Appbar-arrow-back`} />]}
    />
  );
}

export default LoginHeader;
