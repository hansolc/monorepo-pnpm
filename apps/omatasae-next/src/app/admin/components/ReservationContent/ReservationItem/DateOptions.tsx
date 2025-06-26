import { ReservationInfoResponseType } from "@/types/reservation";

export default function DateOptions({
  userId,
  idx,
  selectedDate,
  onChange,
  primaryDate,
  secondaryDate,
  tertiaryDate,
}: {
  idx: number;
  selectedDate: string | undefined;
  onChange: (date: string) => void;
} & Pick<
  ReservationInfoResponseType,
  "userId" | "primaryDate" | "secondaryDate" | "tertiaryDate"
>) {
  const renderOption = (label: string, date: string, key: string) => {
    return (
      <div key={key}>
        <input
          type="radio"
          name={`${userId}-${idx}`}
          id={`${userId}-${idx}-${key}`}
          className="mr-2"
          value={date}
          checked={selectedDate === date}
          onChange={() => onChange(date)}
        />
        <label htmlFor={`${userId}-${idx}-${key}`}>
          {label} {date}
        </label>
      </div>
    );
  };

  return (
    <>
      {renderOption("1순위", primaryDate, "primary")}
      {secondaryDate && renderOption("2순위", secondaryDate, "secondary")}
      {tertiaryDate && renderOption("3순위", tertiaryDate, "tertiary")}
    </>
  );
}
