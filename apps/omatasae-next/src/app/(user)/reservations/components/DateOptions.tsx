import { ReservationInfoResponseType } from "@/types/reservation";
import { Md3TextField } from "@monorepo-pnpm/shared/client";
import React from "react";

function DateOptions({
  state,
  selectedDate,
  primaryDate,
  secondaryDate,
  tertiaryDate,
}: Pick<
  ReservationInfoResponseType,
  "state" | "selectedDate" | "primaryDate" | "secondaryDate" | "tertiaryDate"
>) {
  if (state === "CONFIRMED" && selectedDate) {
    return (
      <div className="flex gap-2">
        <div className="flex gap-2">
          <Md3TextField
            label="날짜"
            type="text"
            outlined
            value={selectedDate.split("-")[0]}
          />
          <Md3TextField
            label="시간"
            type="text"
            outlined
            value={selectedDate.split("-")[1]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex gap-2">
          <Md3TextField
            label="날짜"
            type="text"
            outlined
            value={primaryDate.split("-")[0]}
          />
          <Md3TextField
            label="시간"
            type="text"
            outlined
            value={primaryDate.split("-")[1]}
          />
        </div>
        {secondaryDate && (
          <div className="flex gap-2">
            <Md3TextField
              label="날짜"
              type="text"
              outlined
              value={secondaryDate.split("-")[0]}
            />
            <Md3TextField
              label="시간"
              type="text"
              outlined
              value={secondaryDate.split("-")[1]}
            />
          </div>
        )}
        {tertiaryDate && (
          <div className="flex gap-2">
            <Md3TextField
              label="날짜"
              type="text"
              outlined
              value={tertiaryDate.split("-")[0]}
            />
            <Md3TextField
              label="시간"
              type="text"
              outlined
              value={tertiaryDate.split("-")[1]}
            />
          </div>
        )}
      </>
    );
  }
}

export default DateOptions;
