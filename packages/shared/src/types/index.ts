import { ComponentPropsWithRef, ElementType } from "react";

export type PolymorphicProps<
  T extends React.ElementType,
  Props = {}
> = Props & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof Props | "as">;

export type PolymorphicPropsWithRef<
  T extends React.ElementType,
  Props = {}
> = Props & { as?: T } & Omit<ComponentPropsWithRef<T>, keyof Props | "as">;

export type PolymorphicRef<T extends ElementType> =
  ComponentPropsWithRef<T>["ref"];
