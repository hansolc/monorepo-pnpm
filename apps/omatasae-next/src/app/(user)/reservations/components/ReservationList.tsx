"use client";

import Section from "@/components/Section";
import useQueryReservation from "@/hooks/reservations/useQueryReservation";
import { Md3Button, Md3TextField } from "@monorepo-pnpm/shared/client";
import React from "react";
import { Card } from "@monorepo-pnpm/shared/server";
import { useRecoilValue } from "recoil";
import { userState } from "@/lib/recoil/atoms/user";
import { ReservationStateBadge } from "@/components/Badge";
import DateOptions from "./DateOptions";
import { usePatchReservationState } from "@/hooks/reservations/usePatchReservations";
import { PiSpinner } from "react-icons/pi";

function ReservationList() {
  const user = useRecoilValue(userState);
  const { data, error, isLoading, isError } = useQueryReservation({
    userId: user?.id,
  });
  const { mutate: patchReservation, isPending } = usePatchReservationState();

  if (!data || isLoading) return <p>예약 정보를 가져오고 있습니다...</p>;
  if (isError) return <p>{error.message}</p>;
  if (data.length === 0) return <p>예약 내역이 없습니다.</p>;
  return (
    <div className="mt-5 flex flex-col gap-5">
      {data.map((info, idx) => {
        return (
          <Card
            key={`${info.userId}_${idx}`}
            variants="filled"
            className="flex gap-2 flex-col"
          >
            <Section.Title className="flex justify-between">
              <p>{`${idx + 1}번째 예약 정보`}</p>
              <ReservationStateBadge state={info.state} className="text-sm" />
            </Section.Title>
            <Md3TextField
              label="구글 지도 음식점 링크"
              type="text"
              outlined
              value={info.link}
            />
            <Md3TextField
              label="인원"
              type="text"
              outlined
              value={String(info.peopleCount)}
            />
            <DateOptions
              primaryDate={info.primaryDate}
              secondaryDate={info.secondaryDate}
              tertiaryDate={info.tertiaryDate}
              state={info.state}
              selectedDate={info.selectedDate}
            />
            {info.state === "REJECTED" && (
              <Md3Button
                variants="filled"
                size="sm"
                shape="square"
                onClick={() => {
                  if (window.confirm("삭제하시겠습니까?"))
                    patchReservation({ _id: info._id, state: "DELETED" });
                }}
                icon={isPending ? PiSpinner : undefined}
              >
                삭제
              </Md3Button>
            )}
          </Card>
        );
      })}
    </div>
  );
}

export default ReservationList;
