"use client";

import Section from "@/components/Section";
import { Md3Button } from "@monorepo-pnpm/shared/client";
import React from "react";

function HomeButton() {
  return (
    <Section padding>
      <Md3Button variants="filled" size="md" shape="square" className="w-full!">
        시작하기
      </Md3Button>
    </Section>
  );
}

export default HomeButton;
