import clsx from "clsx";
import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import { PolymorphicPropsWithRef, PolymorphicRef } from "src/types";
import { md3Card } from "./index.css";

type Props<T extends ElementType> = PolymorphicPropsWithRef<
  T,
  {
    variants?: "elevated" | "filled" | "outlined";
    className?: string;
    children?: React.ReactNode;
  }
>;

const Md3Card = forwardRef(
  <T extends ElementType>(
    { as, variants, className, children, ...props }: Props<T>,
    ref: PolymorphicRef<T>
  ) => {
    const Component = as || "div";
    return (
      <Component
        ref={ref}
        className={clsx(md3Card({ variants }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as <T extends ElementType>(
  props: Props<T> & { ref?: PolymorphicRef<T> }
) => JSX.Element;

export default Md3Card;
