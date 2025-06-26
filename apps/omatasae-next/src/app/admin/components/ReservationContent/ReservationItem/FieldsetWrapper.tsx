import { ReservationInfoResponseType } from "@/types/reservation";

export default function FieldsetWrapper({
  link,
  children,
  disabled,
}: { children: React.ReactNode; disabled?: boolean } & Pick<
  ReservationInfoResponseType,
  "link"
>) {
  return (
    <div className="grow shrink">
      <div className="break-all overflow-y-auto h-6 underline">{link}</div>
      <fieldset className="pt-2 flex gap-4 items-center" disabled={disabled}>
        {children}
      </fieldset>
    </div>
  );
}
