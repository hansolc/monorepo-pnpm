"use client";

import { createReservation as create } from "@/actions/reservations";
import { userState } from "@/lib/recoil/atoms/user";
import { ReservationInfoType } from "@/types/reservation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

function useCreateReservation() {
  const user = useRecoilValue(userState);
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (info: ReservationInfoType) => create(info),
    onSuccess: () => {
      localStorage.removeItem("pendingReservation");
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
      alert("예약 성공!");
      router.push("/reservations");
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  const createReservation = (info: ReservationInfoType) => {
    if (!user) {
      if (window.confirm("예약 생성을 위해 로그인이 필요합니다.")) {
        localStorage.setItem("pendingReservation", JSON.stringify(info));
        router.push("/login");
      }
      return;
    }
    mutation.mutate(info);
  };

  const tryReservationAfterLogin = () => {
    const data = localStorage.getItem("pendingReservation");
    if (!data) return;

    try {
      const parsed = JSON.parse(data);
      mutation.mutate(parsed);
    } catch (e) {
      console.error(e);
      localStorage.removeItem("pendingReservation");
      throw new Error("예약 생성을 실패하였습니다.");
    }
  };

  return {
    ...mutation,
    createReservation,
    tryReservationAfterLogin,
  };
}

export default useCreateReservation;
