import { ReservationInfoResponseType } from "@/types/reservation";
import { reservationStateValueAs } from "@/utils/reservations";
import clsx from "clsx";
import React from "react";

function ReservationItem({ data }: { data: ReservationInfoResponseType[] }) {
  return (
    <>
      {data.map((d, idx) => {
        return (
          <React.Fragment key={`${d.userId}-${d.primaryDate}`}>
            <div className="flex items-center gap-4">
              <div className="shrink flex basis-44 justify-between">
                <div className="truncate w-[6ch]">{d.userId}</div>
                <div
                  className={clsx(
                    { "bg-primary": d.state === "WAITING" },
                    { "bg-secondary": d.state === "AVAILABLE" },
                    { "bg-error": d.state === "REJECTED" },
                    { "bg-tertiary": d.state === "CONFIRMED" },
                    "text-white rounded px-4 py-1"
                  )}
                >
                  {reservationStateValueAs(d.state)}
                </div>
              </div>
              <div className="grow shrink">
                <div className="break-all overflow-y-auto h-6 underline">
                  {d.link}
                </div>
                <fieldset className="pt-2 flex gap-4">
                  <div>
                    <input
                      type="radio"
                      name=""
                      id={`${d.userId}-${idx}-primary`}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`${d.userId}-${idx}-primary`}
                    >{`1순위 ${d.primaryDate}`}</label>
                  </div>
                  {/* 2순위 */}
                  {d.secondaryDate && (
                    <div>
                      <input
                        type="radio"
                        name={`${d.userId}-${idx}`}
                        id={`${d.userId}-${idx}-secondary`}
                        className="mr-2"
                      />
                      <label htmlFor={`${d.userId}-${idx}-secondary`}>
                        {`2순위 ${d.secondaryDate}`}
                      </label>
                    </div>
                  )}

                  {/* 3순위 */}
                  {d.tertiaryDate && (
                    <div>
                      <input
                        type="radio"
                        name={`${d.userId}-${idx}`}
                        id={`${d.userId}-${idx}-tertiary`}
                        className="mr-2"
                      />
                      <label htmlFor={`${d.userId}-${idx}-tertiary`}>
                        {`3순위 ${d.tertiaryDate}`}
                      </label>
                    </div>
                  )}
                </fieldset>
              </div>
            </div>
            <hr className="border-t border-primary" />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default ReservationItem;
