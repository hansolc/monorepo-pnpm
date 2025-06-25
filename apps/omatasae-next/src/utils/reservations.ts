import { ReservationStatus } from "@/types/reservation";

function reservationStateValueAs(state: ReservationStatus) {
  switch (state) {
    case "WAITING":
      return "예약 대기중";
    case "AVAILABLE":
      return "예약 가능";
    case "CONFIRMED":
      return "예약 확정";
    case "REJECTED":
      return "예약 불가";
    default:
      return "";
  }
}

export { reservationStateValueAs };
