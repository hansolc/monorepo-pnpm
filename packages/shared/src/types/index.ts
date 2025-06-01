import { PropsWithChildren } from "react";

interface PropsWithChildrenStyle extends PropsWithChildren {
  className?: string;
}

export type PolymorphicProps<
  T extends React.ElementType = "div",
  Props = {}
> = Props & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof Props | "as">;

export type { PropsWithChildrenStyle };
