import React, { PropsWithChildren } from "react";
import { ResponsiveSection } from "@monorepo-pnpm/shared/server";
import Title from "./components/Title";

function SectionRoot({ children }: PropsWithChildren) {
  return <ResponsiveSection as="section">{children}</ResponsiveSection>;
}

const Section = Object.assign(SectionRoot, {
  Title,
});

export default Section;
