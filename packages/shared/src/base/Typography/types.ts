import { ComponentPropsWithoutRef, ReactNode } from "react";

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

export interface TypographyProps<T extends React.ElementType> {
  variants: Role;
  size: Size;
  emphasize?: boolean;
  as?: T;
  children: ReactNode;
  className?: string;
}
