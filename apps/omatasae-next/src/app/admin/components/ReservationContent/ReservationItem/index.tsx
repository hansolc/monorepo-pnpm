import { ReservationInfoResponseType } from "@/types/reservation";
import { Md3Button } from "@monorepo-pnpm/shared/client";
import React, { useState } from "react";
import UserIdAndState from "./UserIdAndState";
import FieldsetWrapper from "./FieldsetWrapper";
import DateOptions from "./DateOptions";
import { usePatchReservationState } from "@/hooks/reservations/usePatchReservations";
import { PiSpinner } from "react-icons/pi";

function ReservationItem({
  item,
  idx,
}: {
  item: ReservationInfoResponseType;
  idx: number;
}) {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    item.selectedDate
  );
  const { mutate, isPending } = usePatchReservationState();
  return (
    <React.Fragment>
      <div className="flex items-center gap-4">
        <UserIdAndState userId={item.userId} state={item.state} />
        <FieldsetWrapper link={item.link} disabled={item.state !== "WAITING"}>
          <DateOptions
            idx={idx}
            onChange={setSelectedDate}
            selectedDate={selectedDate}
            userId={item.userId}
            primaryDate={item.primaryDate}
            secondaryDate={item.secondaryDate}
            tertiaryDate={item.tertiaryDate}
          />
        </FieldsetWrapper>
        <Md3Button
          variants="elevated"
          size="sm"
          shape="square"
          icon={isPending ? PiSpinner : undefined}
          onClick={() =>
            mutate({
              _id: item._id,
              selectedDate: selectedDate,
              state: "CONFIRMED",
            })
          }
          disabled={!selectedDate || item.state !== "WAITING"}
        >
          확정
        </Md3Button>
        <Md3Button
          variants="tonal"
          size="sm"
          shape="square"
          icon={isPending ? PiSpinner : undefined}
          onClick={() =>
            mutate({
              _id: item._id,
              state: "REJECTED",
            })
          }
          disabled={item.state !== "WAITING"}
        >
          불가
        </Md3Button>
      </div>
      <hr className="border-t border-primary" />
    </React.Fragment>
  );
}

export default ReservationItem;
