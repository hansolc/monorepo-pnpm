import { ReservationStatus } from "@/types/reservation";
import { reservationStateValueAs } from "@/utils/reservations";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

function Badge({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx("text-white rounded px-4 py-1", className)}>
      {children}
    </div>
  );
}

export function ReservationStateBadge({
  state,
  className,
}: {
  state: ReservationStatus;
  className?: string;
}) {
  return (
    <Badge
      className={clsx(
        { "bg-primary": state === "WAITING" },
        { "bg-secondary": state === "AVAILABLE" },
        { "bg-error": state === "REJECTED" },
        { "bg-tertiary": state === "CONFIRMED" },
        className
      )}
    >
      {reservationStateValueAs(state)}
    </Badge>
  );
}

export default Badge;
