"use client";

import Appbar from "@/components/Appbar";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";

function ReservationHeader() {
  return (
    <Appbar
      headline="예약확인"
      size="sm"
      leadingIcon={[
        <MdArrowBackIos
          key={`Appbar-arrow-back`}
          onClick={() => window.history.back()}
        />,
      ]}
      className="pt-4 px-4"
    />
  );
}

export default ReservationHeader;
