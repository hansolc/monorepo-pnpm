import { clsx } from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { textStyle } from "./index.css";

const roleMap = {
  display: "display",
  headline: "headline",
  title: "title",
  label: "label",
  body: "body",
} as const;

const sizeMap = {
  sm: "small",
  md: "medium",
  lg: "large",
} as const;

type Role = keyof typeof roleMap;
type Size = keyof typeof sizeMap;

interface TypographyProps<T extends React.ElementType> {
  role: Role;
  size: Size;
  emphasize?: boolean;
  as?: T;
  children: ReactNode;
  className?: string;
}

function Typography<T extends React.ElementType = "span">({
  role,
  size,
  emphasize = false,
  as,
  children,
  className,
  ...rest
}: TypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) {
  const Component = as || "span";

  const key = `${role}-${size}${
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
