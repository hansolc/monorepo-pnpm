"use client";

import { getReservation } from "@/actions/reservations";
import { userState } from "@/lib/recoil/atoms/user";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

export default function useQueryReservation() {
  const user = useRecoilValue(userState);
  return useQuery({
    queryKey: ["reservations"],
    queryFn: getReservation,
    enabled: !!user,
  });
}
