import { ReservationStateBadge } from "@/components/Badge";
import { ReservationInfoResponseType } from "@/types/reservation";

export default function UserIdAndState({
  userId,
  state,
}: Pick<ReservationInfoResponseType, "userId" | "state">) {
  return (
    <div className="shrink flex basis-56 justify-between">
      <div>{userId.username}</div>
      <ReservationStateBadge state={state} />
    </div>
  );
}
