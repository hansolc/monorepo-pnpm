import { ReservationInfoResponseType } from "@/types/reservation";
import { Md3Button } from "@monorepo-pnpm/shared/client";
import React, { useState } from "react";
import UserIdAndState from "./UserIdAndState";
import FieldsetWrapper from "./FieldsetWrapper";
import DateOptions from "./DateOptions";
import { usePatchReservationState } from "@/hooks/reservations/usePatchReservations";
import { PiSpinner } from "react-icons/pi";
import { Card } from "@monorepo-pnpm/shared/server";

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
      <Card
        className="flex items-center gap-4 max-xl:flex-col"
        variants="elevated"
      >
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
        <div className="flex gap-4 items-center">
          {isPending ? (
            <PiSpinner size="24" className="mr-20" />
          ) : (
            <>
              <Md3Button
                variants="tonal"
                size="sm"
                shape="square"
                icon={isPending ? PiSpinner : undefined}
                className="w-[100px]!"
                onClick={() => {
                  if (!selectedDate) {
                    alert("예약 시간을 선택해주세요.");
                    return;
                  }
                  mutate({
                    _id: item._id,
                    selectedDate: selectedDate,
                    state: "CONFIRMED",
                  });
                }}
                disabled={item.state !== "WAITING"}
              >
                확정
              </Md3Button>
              <Md3Button
                variants="outlined"
                size="sm"
                shape="square"
                icon={isPending ? PiSpinner : undefined}
                className="w-[100px]!"
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
            </>
          )}
        </div>
      </Card>
      <hr className="border-t border-primary" />
    </React.Fragment>
  );
}

export default ReservationItem;
