import Appbar from "@/components/Appbar";
import ArrowBackButton from "@/components/Icons/ArrowBack";
import React from "react";

function ReservationHeader() {
  return (
    <Appbar
      headline="예약확인"
      size="sm"
      leadingIcon={[<ArrowBackButton key={`Appbar-arrow-back`} />]}
      className="pt-4 px-4"
    />
  );
}

export default ReservationHeader;
