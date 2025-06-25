"use client";

import Section from "@/components/Section";
import { ReservationInfoResponseType } from "@/types/reservation";
import { reservationStateValueAs } from "@/utils/reservations";
import clsx from "clsx";
import React from "react";

function ReservationContent({ data }: { data: ReservationInfoResponseType[] }) {
  return (
    <Section padding className="flex flex-col py-2 gap-4">
      <Section.Title>예약 내역</Section.Title>
      {data.map((d, idx) => {
        return (
          <React.Fragment key={`${d.userId}-${d.primaryDate}`}>
            <div className="flex items-center gap-4">
              <div className="shrink flex basis-44 justify-between">
                <div className="truncate w-[6ch]">{d.userId}</div>
                <div
                  className={clsx(
                    { "bg-primary": d.state === "WAITING" },
                    { "bg-secondary": d.state === "AVAILABLE" },
                    { "bg-error": d.state === "REJECTED" },
                    { "bg-tertiary": d.state === "CONFIRMED" },
                    "text-white rounded px-4 py-1"
                  )}
                >
                  {reservationStateValueAs(d.state)}
                </div>
              </div>
              <div className="grow shrink">
                <div className="break-all overflow-y-auto h-6 underline">
                  {d.link}
                </div>
                <fieldset className="pt-2">
                  <input
                    type="radio"
                    name=""
                    id={`${d.userId}-${idx}-primary`}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`${d.userId}-${idx}-primary`}
                  >{`1순위 ${d.primaryDate}`}</label>
                </fieldset>
              </div>
            </div>
            <hr className="border-t border-primary" />
          </React.Fragment>
        );
      })}
    </Section>
  );
}

export default ReservationContent;
