"use client";

import Section from "@/components/Section";
import React, { useState } from "react";
import { Card, Tabs } from "@monorepo-pnpm/shared/client";
import Image from "next/image";
import Img from "../../../public/img/sample1.jpg";
import { Typography } from "@monorepo-pnpm/shared/server";

function Section1() {
  const [tabIdx, setTabIdx] = useState<number | undefined>(0);
  const tabs = [
    { label: "CJ프레시웨이" },
    { label: "식자재 유통 솔루션" },
    { label: "푸드 서비스 솔루션" },
    { label: "상품구매" },
  ];
  return (
    <Section outerClassName="bg-surfaceContainer">
      <Section.Title subtitle={{ text: "BUSINESS", color: "text-primary" }}>
        SOLUTION
      </Section.Title>
      <Tabs
        options={tabs}
        className="p-auto grow shrink"
        selectedIndex={tabIdx}
        onChange={setTabIdx}
      ></Tabs>
      {tabs.map((panel, idx) => {
        return (
          idx === tabIdx && (
            <TabPanel key={`homepage-tabpanel-${panel}`} idx={idx} />
          )
        );
      })}
    </Section>
  );
}

function TabPanel({ idx }: { idx: number }) {
  return (
    <div className="flex h-[550px] gap-5 pt-5 flex-col xl:flex-row">
      <Card className="grow relative overflow-hidden">
        <Image src={Img} alt="temp" fill className="object-cover" />
      </Card>
      <Card className="basis-[400px] flex flex-col bg-surface justify-between pb-9!">
        <Typography variants="display" size="lg" emphasize>
          {(idx + 1).toString().padStart(2, "0")}
        </Typography>
        <div>
          <Typography variants="display" size="md" className="mb-5" as="div">
            Title
          </Typography>
          <Typography
            variants="title"
            size="lg"
            className="wrap-anywhere"
            as={"div"}
          >
            BodyBodyBodyBodyBodyBodyBod
            yBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyB
            odyBodyBodyBodyBody
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default Section1;
