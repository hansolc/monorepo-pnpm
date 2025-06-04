import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme/color.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

function hexToRgb(hex: string) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

const baseFieldset = style([
  sprinkles({
    display: "flex",
    gap: 16,
    alignItems: "center",
  }),
  {
    border: 0,
    boxSizing: "border-box",
    padding: "8px 16px",
    height: 56,
    ":disabled": {
      opacity: 0.5,
      pointerEvents: "none",
      backgroundColor: `rgba(${hexToRgb(vars.colors.onSurface)},0.04)`,
    },
    ":hover": {
      cursor: "pointer",
      backgroundColor: `rgba(${hexToRgb(vars.colors.onSurface)},0.08)`,
    },
  },
]);

export const fieldSet = recipe({
  base: [baseFieldset],
  variants: {
    type: {
      filled: [
        {
          backgroundColor: vars.colors.surfaceContainerHighest,
          borderBottom: `1px solid ${vars.colors.primary}`,
          selectors: {
            "&:focus-within": {
              borderBottomWidth: "2px",
            },
          },
        },
      ],
      outlined: [
        {
          border: `1px solid ${vars.colors.outline}`,
          "&:focus-within": {
            border: `2px solid ${vars.colors.primary}`,
            boxSizing: "content-box",
            paddingTop: 0,
          },
        },
      ],
    },
    fixedHeight: {
      true: { height: "auto" },
      false: {},
    },
  },
  compoundVariants: [],
});

export const input = style({
  fontSize: "1rem",
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  width: "100%",
  padding: 0,
  resize: "none",
  scrollbarWidth: "none",
  // height: "24px",
  color: vars.colors.onSurface,
});

export const label = recipe({
  base: { fontSize: "1rem" },
  variants: {
    floated: {
      true: {
        fontSize: "0.75rem",
        color: vars.colors.primary,
      },
      false: {},
    },
  },
});
