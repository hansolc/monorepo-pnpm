import React, { Fragment } from "react";
import { StoriesTypogrphyProps, storiesTypography } from "./Typography.css";

export interface TypographyProps {
  children: React.ReactNode;
  ty?: StoriesTypogrphyProps["ty"];
  size?: StoriesTypogrphyProps["size"];
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Typography = ({
  children,
  ty,
  size,
  as: Component = "span",
  className = "",
}: TypographyProps) => {
  return (
    <Component className={`${storiesTypography({ ty, size })} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
