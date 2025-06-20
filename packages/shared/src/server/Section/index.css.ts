// packages/shared/src/base/Section/Section.css.ts
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

export const baseSection = recipe({
  base: {
    width: "100%",
    minHeight: 200,
  },
});

export const baseSectionInner = style({
  width: "100%",
  boxSizing: "border-box",
  padding: "0 1rem",
  "@media": {
    "screen and (min-width: 1280px)": {
      maxWidth: "1280px",
      padding: 0,
      margin: "0 auto",
    },
  },
});
