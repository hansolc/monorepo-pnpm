// Section.tsx
import React, { ReactNode } from "react";
import {
  withBackgroundImage,
  WithBackgroundImageProps,
} from "../hoc/withBackgroundImage";
import clsx from "clsx";
import { baseSectionInner } from "./index.css";

interface SectionBaseProps {
  outerClassName?: string;
  innerClassName?: string;
  children: ReactNode;
}

const SectionBase = React.forwardRef(function SectionBase(
  props: SectionBaseProps & WithBackgroundImageProps,
  ref: React.Ref<HTMLTableSectionElement>
) {
  const { children, outerClassName, innerClassName } = props;

  return (
    <section ref={ref} className={outerClassName}>
      <div className={clsx(innerClassName, baseSectionInner)}>{children}</div>
    </section>
  );
});

const Section = withBackgroundImage(SectionBase);
export default Section;
