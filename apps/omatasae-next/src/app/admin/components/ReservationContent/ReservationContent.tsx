"use client";

import Section from "@/components/Section";
import { ReservationInfoResponseType } from "@/types/reservation";
import React, { useEffect, useRef } from "react";
import ReservationList from "./ReservationList";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getReservation } from "@/actions/reservations";
import useObserve from "@/hooks/useObserver";

function ReservationContent({
  initialData,
}: {
  initialData: ReservationInfoResponseType[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteScroll({
      apiCall: getReservation,
      initialData: initialData,
      key: "reservations",
      limit: 10,
      skip: 0,
    });
  const { observe } = useObserve({ observedCallback: fetchNextPage });

  useEffect(() => {
    if (ref.current) {
      observe(ref.current);
    }
  }, [observe]);

  return (
    <Section padding className="flex flex-col py-2 gap-4">
      <Section.Title>예약 내역</Section.Title>
      <ReservationList data={data} />
      {hasNextPage && <div ref={ref}></div>}
      {isFetchingNextPage && <div>가져오는중...</div>}
    </Section>
  );
}

export default ReservationContent;
