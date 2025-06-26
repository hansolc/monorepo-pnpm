import Appbar from "@/components/Appbar";
import ArrowBackButton from "@/components/Icons/ArrowBack";
import React from "react";

function RegisHeader() {
  return (
    <Appbar
      headline="회원가입"
      size="md"
      leadingIcon={[<ArrowBackButton key={`Appbar-arrow-back`} />]}
    />
  );
}

export default RegisHeader;
