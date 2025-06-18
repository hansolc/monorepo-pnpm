import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const flex = recipe({
  base: [{ display: "flex", width: "100%" }],
  variants: {
    dir: {
      col: { flexDirection: "column" },
    },
    items: {
      center: { alignItems: "center" },
    },
    justify: {
      center: { justifyContent: "center" },
      between: { justifyContent: "space-between" },
    },
  },
});

export const flexItem = recipe({
  base: [],
  variants: {
    grow: {
      true: { flexGrow: 1 },
    },
    shrink: {
      true: { flexShrink: 1 },
    },
  },
});

export type FlexStyleProps = NonNullable<RecipeVariants<typeof flex>>;
export type FlexItemStyleProps = NonNullable<RecipeVariants<typeof flexItem>>;
