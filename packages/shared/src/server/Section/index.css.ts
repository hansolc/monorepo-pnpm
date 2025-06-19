// packages/shared/src/base/Section/Section.css.ts
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

export const baseSection = recipe({
  base: {
    width: "100%",
    minHeight: 200,
  },
  variants: {
    size: {
      contain: {
        backgroundSize: "contain",
      },
      cover: {
        backgroundSize: "cover",
      },
      auto: {
        backgroundSize: "auto",
      },
    },
    repeat: {
      "no-repeat": {
        backgroundRepeat: "no-repeat",
      },
      repeat: {
        backgroundRepeat: "repeat",
      },
    },
    position: {
      top: { backgroundPosition: "top" },
      left: { backgroundPosition: "left" },
      right: { backgroundPosition: "right" },
      bottom: { backgroundPosition: "bottom" },
      center: { backgroundPosition: "center" },
    },
  },
  defaultVariants: {
    size: "cover",
    repeat: "no-repeat",
    position: "center",
  },
});

export type SectionStyleVariants = Required<
  NonNullable<RecipeVariants<typeof baseSection>>
>;

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
