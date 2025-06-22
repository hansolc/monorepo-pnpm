import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import Title from "./components/Title";

function SectionRoot({
  children,
  className,
  padding,
  ...props
}: PropsWithChildren<{ className?: string; padding?: boolean }>) {
  return (
    <section className={clsx(className, { "px-5": padding })} {...props}>
      {children}
    </section>
  );
}

const Section = Object.assign(SectionRoot, {
  Title,
});

export default Section;
