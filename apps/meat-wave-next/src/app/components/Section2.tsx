"use client";

import Section from "@/components/Section";
import { Card } from "@monorepo-pnpm/shared/client";
import { Typography } from "@monorepo-pnpm/shared/server";
import React from "react";

function Section2() {
  const options = ["재무재표", "공시현황", "IR자료실"];
  return (
    <Section>
      <Section.Title subtitle={{ text: "IR" }} className="text-primary">
        Investor Relations
      </Section.Title>
      <div className="flex gap-5 h-[550px] flex-col xl:flex-row">
        <Card className="grow bg-surface"></Card>
        <div className="basis-[400px] flex flex-col gap-10">
          {options.map((d) => {
            return (
              <Card
                key={`section2-card-${d}`}
                className="bg-surface grow content-center px-10!"
              >
                <Typography variants="title" size="lg">
                  {d}
                </Typography>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Section2;
