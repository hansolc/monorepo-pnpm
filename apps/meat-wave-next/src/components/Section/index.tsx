import React, { ComponentProps, PropsWithChildren } from "react";
import { ResponsiveSection } from "@monorepo-pnpm/shared/server";
import Title from "./components/Title";
import clsx from "clsx";

function SectionRoot({
  children,
  outerClassName,
  ...props
}: PropsWithChildren & ComponentProps<typeof ResponsiveSection>) {
  return (
    <ResponsiveSection
      outerClassName={clsx("py-[150px]", outerClassName)}
      {...props}
    >
      {children}
    </ResponsiveSection>
  );
}

const Section = Object.assign(SectionRoot, {
  Title,
});

export default Section;
