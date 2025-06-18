import React, { ComponentProps, PropsWithChildren } from "react";
import clsx from "clsx";
import {
  flex,
  flexItem,
  FlexItemStyleProps,
  FlexStyleProps,
} from "./index.css";
import { PolymorphicProps } from "src/types";

const FlexRoot = <T extends React.ElementType = "div">({
  dir,
  items,
  justify,
  className,
  children,
  as,
  ...props
}: PolymorphicProps<T, FlexStyleProps & PropsWithChildren>) => {
  const Component = as || "div";
  return (
    <div className={clsx(flex({ dir, items, justify }), className)} {...props}>
      {children}
    </div>
  );
};

const Item = <T extends React.ElementType = "div">({
  as,
  grow,
  shrink,
  children,
}: PolymorphicProps<T, FlexItemStyleProps & PropsWithChildren>) => {
  const Component = as || "div";

  return (
    <Component className={clsx(flexItem({ grow: !!grow, shrink: !!shrink }))}>
      {children}
    </Component>
  );
};

const Flex = Object.assign(FlexRoot, {
  Item,
});

export default Flex;
