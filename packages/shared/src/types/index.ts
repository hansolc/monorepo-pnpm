export type PolymorphicProps<
  T extends React.ElementType = "div",
  Props = {}
> = Props & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof Props | "as">;
