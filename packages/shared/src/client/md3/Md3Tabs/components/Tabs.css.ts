import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const md3TabsGroup = style([
  sprinkles({
    bg: "surface",
    borderRadius: "none",
    boxShadow: "level0",
  }),
  {
    // guide height
    // base: 48, with icon: 64
    height: "100%",
  },
]);
