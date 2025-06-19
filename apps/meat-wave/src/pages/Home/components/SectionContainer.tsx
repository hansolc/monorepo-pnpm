import React from "react";
import { Section, Typography } from "@monorepo-pnpm/shared/base";

function SectionContainer() {
  return (
    <main>
      <Section
        bg={{
          image:
            "https://img.freepik.com/free-photo/plain-smooth-green-wall-texture_53876-129746.jpg?semt=ais_hybrid&w=740",
        }}
        className="flex flex-col items-center justify-center"
        as="section"
      >
        <Typography variants="headline" size="md">
          텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
        </Typography>
      </Section>
    </main>
  );
}

export default SectionContainer;
