"use client";

import Section from "@/components/Section";
import { Card, Md3TextField } from "@monorepo-pnpm/shared/client";
import { Typography } from "@monorepo-pnpm/shared/server";
import React from "react";

function RservationCard() {
  return (
    <Section className="relative flex flex-col items-center h-full">
      <Card
        variants="elevated"
        className="absolute w-[calc(100%-10px)] top-[-100px] z-10 hover:bg-surfaceContainerLow!"
      >
        <Typography variants="title" size="lg" emphasize>
          첫 번째 예약
        </Typography>
        <Md3TextField label="구글 지도 음식점 링크*" type="text" outlined />
        <Md3TextField
          label="인원*"
          type="text"
          outlined
          inputConfig={{ suffix: "명" }}
        />
        <div className="flex">
          <Md3TextField label="날짜*" type="text" outlined />
          <Md3TextField label="시간*" type="text" outlined />
        </div>
      </Card>
      <div className="h-[250px]" aria-hidden></div>
    </Section>
  );
}

export default RservationCard;
