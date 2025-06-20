// Section.tsx
import React, { ReactNode } from "react";
import {
  withBackgroundImage,
  WithBackgroundImageProps,
} from "../hoc/withBackgroundImage";
import clsx from "clsx";
import { baseSectionInner } from "./index.css";

interface SectionBaseProps {
  className?: string;
  children: ReactNode;
}

const SectionBase = React.forwardRef(function SectionBase(
  props: SectionBaseProps & WithBackgroundImageProps,
  ref: React.Ref<HTMLTableSectionElement>
) {
  const { className, children } = props;

  return (
    <section ref={ref}>
      <div className={clsx(className, baseSectionInner)}>{children}</div>
    </section>
  );
});

const Section = withBackgroundImage(SectionBase);
export default Section;
