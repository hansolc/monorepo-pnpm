import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme/color.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { hexToRgb } from "src/utils/style";

const baseStoriesMenu = style([
  sprinkles({
    color: "onSecondaryContainer",
    backgroundColor: "surfaceContainer",
  }),
  {
    borderRadius: 4,
  },
]);

export const storiesMenu = recipe({
  base: [baseStoriesMenu],
});

const baseStoriesMenuItem = style([
  sprinkles({
    color: "onSurface",
  }),
  {
    lineHeight: "20px",
    fontSize: "0.875rem",
    fontWeight: 500,
    boxSizing: "border-box",
    height: "48px",
    alignContent: "center",
    cursor: "pointer",
    padding: "8px 12px",
    ":hover": {
      backgroundColor: `rgba(${hexToRgb(vars.colors.onSurface)}, 0.08)`,
    },
  },
]);

export const storiesMenuItem = recipe({
  base: [baseStoriesMenuItem],
});
