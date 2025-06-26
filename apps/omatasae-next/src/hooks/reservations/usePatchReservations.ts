// usePatchReservationState.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchReservationState } from "@/actions/reservations";

export function usePatchReservationState() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchReservationState,
    onSuccess: (updatedReservation) => {
      console.log("updated reservation info: ", updatedReservation);
      // 예시: reservations 쿼리를 다시 가져오도록
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
    onError: (error) => {
      console.error("예약 상태 변경 오류:", error);
    },
  });
}
