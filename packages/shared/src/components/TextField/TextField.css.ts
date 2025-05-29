import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme/color.css";

const baseInput = style([
  sprinkles({ color: "onSurface" }),
  {
    fontSize: "1rem",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    width: "100%",
    padding: 0,
    resize: "none",
    scrollbarWidth: "none",
    height: "24px",
  },
]);

export const input = recipe({
  base: [baseInput],
});

const baseLabel = style({
  position: "absolute",
  transition: "all 0.2s ease",
  fontSize: "1rem",
});

export const label = recipe({
  base: [baseLabel],
  variants: {
    floated: {
      true: {
        fontSize: "0.75rem",
        color: vars.colors.primary,
        position: "relative",
      },
      false: {},
    },
  },
});

export const textFieldFix = styleVariants({
  prefix: [sprinkles({ color: "onSurfaceVariant", paddingRight: 4 })],
  suffix: [sprinkles({ color: "onSurfaceVariant", paddingLeft: 4 })],
});
