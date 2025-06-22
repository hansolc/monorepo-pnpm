import { sprinkles } from "@styles/sprinkles.css";
import { staticVars } from "@styles/theme/staticVars";
import { vars } from "@styles/theme/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const md3Appbar = recipe({
  base: [
    sprinkles({
      backgroundColor: "surface",
      boxShadow: "level0",
      px: 4,
      borderRadius: "none",
      display: "flex",
    }),
    {
      boxSizing: "border-box",
    },
  ],
  variants: {
    size: {
      sm: [{ alignItems: "center", height: 64, gap: 4 }],
      md: [
        {
          flexDirection: "column",
          height: 112,
          justifyContent: "space-between",
        },
      ],
      lg: [
        {
          flexDirection: "column",
          // Originally 152px
          height: 132,
          justifyContent: "space-between",
        },
      ],
    },
  },
});

export const md3AppbarTypoAlign = styleVariants({
  start: [{ textAlign: "left" }],
  center: [{ textAlign: "center" }],
});

export const md3AppbarTitle = style({
  color: vars.colors.onSurface,
});

export const md3AppbarSubtitle = style({
  color: vars.colors.onSurfaceVariant,
});

const iconSize = style({
  width: 24,
  height: 24,
  cursor: "pointer",
});

export const md3AppbarLeadingIcon = style([
  iconSize,
  {
    color: vars.colors.onSurface,
    width: 24,
    height: 24,
  },
]);

export const md3AppbarTrailingIcon = style([
  iconSize,
  {
    color: vars.colors.onSurfaceVariant,
  },
]);
