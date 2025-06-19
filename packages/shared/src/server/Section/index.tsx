// packages/shared/src/base/Section/Section.tsx
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import {
  baseSection,
  baseSectionInner,
  SectionStyleVariants,
} from "./index.css";

interface SectionProps<T extends React.ElementType> {
  bg?: {
    image: string;
    size?: SectionStyleVariants["size"];
    repeat?: SectionStyleVariants["repeat"];
    position?: SectionStyleVariants["position"];
  };
  as?: T;
}

function Section<T extends React.ElementType>({
  bg,
  className,
  children,
  as,
  ...props
}: SectionProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof SectionProps<T>>) {
  const backgroundImageStyle = bg?.image
    ? { backgroundImage: `url(${bg.image})` }
    : undefined;
  const Component = as || "section";

  return (
    <Component
      className={clsx(
        baseSection({
          size: bg?.size,
          repeat: bg?.repeat,
          position: bg?.position,
        }),
        className
      )}
      style={backgroundImageStyle}
      {...props}
    >
      <div className={baseSectionInner}>{children}</div>
    </Component>
  );
}

export default Section;
