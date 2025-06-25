import ReservationForm from "@/components/ReservationForm";
import Section from "@/components/Section";
import { Card } from "@monorepo-pnpm/shared/server";
import React from "react";

function RservationCard({ idx = 1 }: { idx: number }) {
  return (
    <Section className="relative" padding>
      <Card
        variants="elevated"
        className="absolute w-[calc(100%-10px)] left-[5px] top-[-100px] z-10 bg-surfaceContainerLow!"
      >
        <Section.Title>{idx} 번째 예약</Section.Title>
        <ReservationForm />
      </Card>
      <div className="h-[250px]" aria-hidden></div>
    </Section>
  );
}

export default RservationCard;
