"use client";

import Section from "@/components/Section";
import useQueryReservation from "@/hooks/useQueryReservation";
import { Card, Md3TextField } from "@monorepo-pnpm/shared/client";
import React from "react";

function ReservationList() {
  const { data, error, isLoading, isError } = useQueryReservation();

  if (!data || isLoading)
    return <Section padding>예약 정보를 가져오고 있습니다...</Section>;
  if (isError) return <Section padding>{error.message}</Section>;

  return (
    <Section padding className="mt-5 flex flex-col gap-5">
      {data.map((info, idx) => {
        return (
          <Card
            key={info._id}
            variants="filled"
            className="flex gap-2 flex-col"
          >
            <Section.Title>{`${idx + 1}번째 예약 정보`}</Section.Title>
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
            <div className="flex gap-2">
              <Md3TextField
                label="날짜"
                type="text"
                outlined
                value={info.primaryDate.split("-")[0]}
              />
              <Md3TextField
                label="시간"
                type="text"
                outlined
                value={info.primaryDate.split("-")[1]}
              />
            </div>
            {info.secondaryDate && (
              <div className="flex gap-2">
                <Md3TextField
                  label="날짜"
                  type="text"
                  outlined
                  value={info.secondaryDate.split("-")[0]}
                />
                <Md3TextField
                  label="시간"
                  type="text"
                  outlined
                  value={info.secondaryDate.split("-")[1]}
                />
              </div>
            )}
            {info.tertiaryDate && (
              <div className="flex gap-2">
                <Md3TextField
                  label="날짜"
                  type="text"
                  outlined
                  value={info.tertiaryDate.split("-")[0]}
                />
                <Md3TextField
                  label="시간"
                  type="text"
                  outlined
                  value={info.tertiaryDate.split("-")[1]}
                />
              </div>
            )}
          </Card>
        );
      })}
    </Section>
  );
}

export default ReservationList;
