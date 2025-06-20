import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { hexToRgb } from "src/utils/style";

const reset = style({
  border: "none",
  margin: 0,
  padding: 0,
  width: "auto",
  overflow: "visible",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  lineHeight: "normal",
  // 벤더 프리픽스는 문자열 키로 지정
  WebkitFontSmoothing: "inherit",
  MozOsxFontSmoothing: "inherit",
  WebkitAppearance: "none",
});

export const md3TabItem = recipe({
  base: [
    reset,
    {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      paddingBottom: 14,
      paddingTop: 14,
      flex: 1,
    },
  ],
  variants: {
    hover: {
      true: [{ color: vars.colors.primary }],
      false: [],
    },
    selected: {
      true: [
        {
          color: vars.colors.primary,
          borderBottom: `3px solid ${vars.colors.primary}`,
          borderRadius: "3px 3px 0 0",
          outline: "none",
        },
      ],
      false: [],
    },
    disabled: {
      true: [{ color: vars.colors.onSurfaceVariant }],
      false: [],
    },
    active: {
      true: [
        { backgroundColor: `rgba(${hexToRgb(vars.colors.onSurface)}, 0.1)` },
      ],
    },
  },
});
