import { clsx } from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { textStyle } from "./index.css";
import { TypographyProps } from "./types";

function Typography<T extends React.ElementType = "span">({
  variants,
  size,
  emphasize = false,
  as,
  children,
  className,
  ...rest
}: TypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) {
  const Component = as || "span";

  const key = `${variants}-${size}${
    emphasize ? "-emphasized" : ""
  }` as keyof typeof textStyle;
  const typographyClass = textStyle[key];

  return (
    <Component className={clsx(typographyClass, className)} {...rest}>
      {children}
    </Component>
  );
}

export default Typography;
