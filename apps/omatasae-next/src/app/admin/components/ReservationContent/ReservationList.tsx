import { ReservationInfoResponseType } from "@/types/reservation";
import React from "react";
import ReservationItem from "./ReservationItem";

function ReservationList({ data }: { data: ReservationInfoResponseType[] }) {
  return (
    <>
      {data.map((d, idx) => (
        <ReservationItem key={`${d.userId._id}-${idx}`} item={d} idx={idx} />
      ))}
    </>
  );
}

export default ReservationList;
