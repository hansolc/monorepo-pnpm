import { clsx } from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { textStyle } from "./index.css";
import { Role, Size } from "./types";

interface TypographyProps<T extends React.ElementType> {
  variants: Role;
  size: Size;
  emphasize?: boolean;
  as?: T;
  children: ReactNode;
  className?: string;
}

function Typography<T extends React.ElementType>({
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
