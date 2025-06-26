"use client";

import useFormValidation from "@/hooks/useFormValidation";
import { ReservationInfoType } from "@/types/reservation";
import { Md3Button, Md3TextField } from "@monorepo-pnpm/shared/client";
import React, { useState } from "react";
import { MdOutlineMap } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import useCreateReservation from "@/hooks/reservations/useCreateReservation";
import { PiSpinner } from "react-icons/pi";

function ReservationForm() {
  const { handleSubmit, register, errors } =
    useFormValidation<ReservationInfoType>();
  const [dateTimeCount, setDateTimeCount] = useState(1);
  const { createReservation, isPending } = useCreateReservation();

  const renderDateTimeField = (
    date: keyof ReservationInfoType,
    time: keyof ReservationInfoType
  ) => (
    <div className="flex gap-2 mb-2">
      <Md3TextField
        label={`YYMMDD`}
        type="text"
        outlined
        {...register(date, {
          required: date === "primaryDate",
          pattern: {
            value: /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
            message: "YYMMDD 형식으로 작성해주세요.",
          },
        })}
        error={errors[date]}
        inputConfig={{
          leadingIcon: <MdOutlineDateRange size="24" />,
          supportingText: "ex) 250624",
        }}
      />
      <Md3TextField
        label={`HH:mm`}
        type="text"
        outlined
        {...register(time, {
          required: time === "primaryTime",
          pattern: {
            value: /^([0]?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
            message: "HH:mm 형식으로 작성해주세요.",
          },
        })}
        error={errors[time]}
        inputConfig={{
          leadingIcon: <MdOutlineAccessTime size="24" />,
          supportingText: "ex) 21:30",
        }}
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit((data) => createReservation(data))}
      className="flex flex-col gap-3"
    >
      <Md3TextField
        label="구글 지도 음식점 링크*"
        type="text"
        outlined
        {...register("link", { required: "음식점 링크*" })}
        inputConfig={{
          supportingText: "구글 지도 음식점 링크를 입력해주세요.",
          leadingIcon: <MdOutlineMap size="24" />,
        }}
        error={errors.link}
      />
      <Md3TextField
        label="인원*"
        type="text"
        outlined
        inputConfig={{
          suffix: "명",
          supportingText: "총 예약 인원 수를 입력해주세요.",
          leadingIcon: <MdOutlinePeopleOutline size="24" />,
        }}
        {...register("peopleCount", { required: "예약 인원 수*" })}
        error={errors.peopleCount}
      />

      {renderDateTimeField("primaryDate", "primaryTime")}
      {dateTimeCount >= 2 &&
        renderDateTimeField("secondaryDate", "secondaryTime")}
      {dateTimeCount === 3 &&
        renderDateTimeField("tertiaryDate", "tertiaryTime")}

      {dateTimeCount < 3 && (
        <Md3Button
          type="button"
          variants="text"
          onClick={() => setDateTimeCount((prev) => prev + 1)}
          icon={MdAdd}
        >
          다른 가능한 시간 추가하기
        </Md3Button>
      )}

      <Md3Button
        type="submit"
        variants="filled"
        size="md"
        icon={isPending ? PiSpinner : undefined}
      >
        {isPending ? "요청중..." : "예약하기"}
      </Md3Button>
    </form>
  );
}

export default ReservationForm;
