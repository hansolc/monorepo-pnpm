import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";

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

// 공통 prop: as, className 등
export type PropsWithAs<TTag extends ElementType, TProps = {}> = TProps & {
  as?: TTag;
} & Omit<React.ComponentPropsWithoutRef<TTag>, keyof TProps | "as">;

export type RefFor<TTag extends ElementType> = {
  ref?: React.ComponentPropsWithRef<TTag>["ref"];
};

export type RenderProps<T> = React.ReactNode | ((props: T) => React.ReactNode);
