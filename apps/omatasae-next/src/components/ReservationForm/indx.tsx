"use client";

import useFormValidation from "@/hooks/useFormValidation";
import { Md3Button, Md3TextField } from "@monorepo-pnpm/shared/client";
import React, { useState } from "react";

interface ReservationInfoType {
  link: string;
  peopleCount: string;
  primaryDateTime: string;
  secondaryDateTime?: string;
  tertiaryDateTime?: string;
}

function ReservationForm() {
  const { handleSubmit, register, errors } =
    useFormValidation<ReservationInfoType>();
  const [dateTimeCount, setDateTimeCount] = useState(1);

  const renderDateTimeField = (
    label: string,
    name: keyof ReservationInfoType
  ) => (
    <div className="flex gap-2 mb-2">
      <Md3TextField
        label={`${label} 날짜`}
        type="text"
        outlined
        {...register(name, { required: name === "primaryDateTime" })}
        error={errors[name]}
      />
      <Md3TextField
        label={`${label} 시간`}
        type="text"
        outlined
        {...register(name, { required: name === "primaryDateTime" })}
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-3"
    >
      <Md3TextField
        label="구글 지도 음식점 링크*"
        type="text"
        outlined
        {...register("link", { required: "음식점 링크*" })}
        error={errors.link}
      />
      <Md3TextField
        label="인원*"
        type="text"
        outlined
        inputConfig={{ suffix: "명" }}
        {...register("peopleCount", { required: "예약 인원 수*" })}
        error={errors.peopleCount}
      />

      {renderDateTimeField("첫 번째", "primaryDateTime")}
      {dateTimeCount >= 2 &&
        renderDateTimeField("두 번째", "secondaryDateTime")}
      {dateTimeCount === 3 &&
        renderDateTimeField("세 번째", "tertiaryDateTime")}

      {dateTimeCount < 3 && (
        <Md3Button
          type="button"
          variants="text"
          onClick={() => setDateTimeCount((prev) => prev + 1)}
        >
          + 다른 가능한 시간 추가하기
        </Md3Button>
      )}

      <Md3Button
        type="submit"
        variants="filled"
        className="mt-4 bg-primary text-white p-2 rounded"
      >
        예약하기
      </Md3Button>
    </form>
  );
}

export default ReservationForm;
