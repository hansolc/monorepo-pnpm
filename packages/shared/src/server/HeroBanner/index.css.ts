import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const baseHeroBanner = recipe({
  base: [
    {
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
