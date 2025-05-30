import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme/color.css";

const errorFontColor = style({ color: `${vars.colors.error} !important` });

export const fieldset = recipe({
  base: [],
  variants: {
    error: {
      true: {
        borderColor: `${vars.colors.error} !important`,
      },
      false: {},
    },
  },
});

export const input = recipe({
  base: [],
  variants: {
    error: {
      true: errorFontColor,
      false: {},
    },
  },
});

const baseLabel = style({
  position: "absolute",
  transition: "all 0.2s ease",
});

export const label = recipe({
  base: [baseLabel],
  variants: {
    floated: {
      true: {
        position: "relative",
      },
      false: {},
    },
    error: {
      true: errorFontColor,
      false: {},
    },
  },
});

export const textFieldFix = styleVariants({
  prefix: [sprinkles({ color: "onSurfaceVariant", paddingRight: 4 })],
  suffix: [sprinkles({ color: "onSurfaceVariant", paddingLeft: 4 })],
});
