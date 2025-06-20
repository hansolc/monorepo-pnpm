import React, { PropsWithChildren } from "react";
import { ResponsiveSection } from "@monorepo-pnpm/shared/server";
import Title from "./components/Title";
import clsx from "clsx";

function SectionRoot({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <ResponsiveSection className={clsx(className)}>
      {children}
    </ResponsiveSection>
  );
}

const Section = Object.assign(SectionRoot, {
  Title,
});

export default Section;
