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
      <div className="max-w-[500px] shrink-0 overflow-y-auto overflow-x-hidden break-all max-h-[3rem] underline">
        {link}
      </div>
      <fieldset
        className="pt-2 flex gap-4 items-center max-xl:flex-col"
        disabled={disabled}
      >
        {children}
      </fieldset>
    </div>
  );
}
