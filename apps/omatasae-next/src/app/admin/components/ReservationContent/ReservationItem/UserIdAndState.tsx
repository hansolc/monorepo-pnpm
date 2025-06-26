import Badge from "@/components/Badge";
import { ReservationInfoResponseType } from "@/types/reservation";
import { reservationStateValueAs } from "@/utils/reservations";
import clsx from "clsx";

export default function UserIdAndState({
  userId,
  state,
}: Pick<ReservationInfoResponseType, "userId" | "state">) {
  return (
    <div className="shrink flex basis-56 justify-between">
      <div>{userId.username}</div>
      <Badge
        className={clsx(
          { "bg-primary": state === "WAITING" },
          { "bg-secondary": state === "AVAILABLE" },
          { "bg-error": state === "REJECTED" },
          { "bg-tertiary": state === "CONFIRMED" },
          "text-white rounded px-4 py-1"
        )}
      >
        {reservationStateValueAs(state)}
        {}
      </Badge>
    </div>
  );
}
