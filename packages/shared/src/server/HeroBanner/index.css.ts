import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const baseHeroBanner = recipe({
  base: [
    {
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  ],
  variants: {
    height: {
      full: { height: "100vh" },
      auto: { height: "auto" },
    },
  },
  defaultVariants: {
    height: "full",
  },
});

export const baseHeroBannerOverlay = style({
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
});

export type HeroBannerStyleVariants = Required<
  NonNullable<RecipeVariants<typeof baseHeroBanner>>
>;
