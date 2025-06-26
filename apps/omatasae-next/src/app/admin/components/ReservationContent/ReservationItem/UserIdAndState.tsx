import { ReservationStateBadge } from "@/components/Badge";
import { ReservationInfoResponseType } from "@/types/reservation";

export default function UserIdAndState({
  userId,
  state,
}: Pick<ReservationInfoResponseType, "userId" | "state">) {
  return (
    <div className="shrink flex basis-56 justify-between max-xl:basis-0 max-xl:gap-4">
      <div>{userId.username}</div>
      <ReservationStateBadge state={state} />
    </div>
  );
}
