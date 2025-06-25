import { staticVars } from "@styles/theme/staticVars";
import { vars } from "@styles/theme/theme.css";
import { recipe } from "@vanilla-extract/recipes";
import { hexToRgb } from "src/utils/style";

export const md3Card = recipe({
  base: [
    {
      borderRadius: staticVars.shape.corner.medium,
      padding: "16px",
    },
  ],
  variants: {
    variants: {
      elevated: [
        {
          backgroundColor: vars.colors.surfaceContainerLow,
          boxShadow: staticVars.elevation.level1,
          ":hover": {
            backgroundColor: `rgba(${hexToRgb(vars.colors.onSurface)}, 0.08)`,
            boxShadow: staticVars.elevation.level2,
          },
        },
      ],
      filled: [
        {
          backgroundColor: vars.colors.surfaceContainerHighest,
          boxShadow: staticVars.elevation.level0,
          ":hover": {
            backgroundColor: `rgba(${hexToRgb(vars.colors.onSurface)}, 0.08)`,
            boxShadow: staticVars.elevation.level1,
          },
        },
      ],
      outlined: [
        {
          backgroundColor: vars.colors.surface,
          boxShadow: staticVars.elevation.level0,
          ":hover": {
            backgroundColor: `rgba(${hexToRgb(vars.colors.onSurface)}, 0.08)`,
            boxShadow: staticVars.elevation.level1,
            outline: `1px solid ${vars.colors.outlineVariant}`,
          },
        },
      ],
    },
  },
});
