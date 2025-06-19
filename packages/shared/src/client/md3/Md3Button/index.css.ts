import { staticVars } from "@styles/theme/staticVars";
import { vars } from "@styles/theme/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { createButtonSize, createButtonVariant } from "./utils";
import { hexToRgb } from "src/utils/style";
import { sprinkles } from "@styles/sprinkles.css";

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

export const md3Button = recipe({
  base: [
    reset,
    {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      selectors: {
        "&[data-disabled]": {
          backgroundColor: `rgba(${hexToRgb(vars.colors.onSurface)}, 0.1)`,
          boxShadow: staticVars.elevation.level0,
          color: vars.colors.onSurface,
          pointerEvents: "none",
        },
      },
    },
  ],
  variants: {
    variants: {
      elevated: [
        {
          ...createButtonVariant({
            backgroundColor: vars.colors.surfaceContainerLow,
            labelColor: vars.colors.primary,
            boxShadow: staticVars.elevation.level1,
            hoverBoxShadow: staticVars.elevation.level2,
            hoverOverlay: vars.colors.primary,
            focusOverlay: vars.colors.primary,
            activeOverlay: vars.colors.primary,
          }),
        },
      ],
      filled: [
        {
          ...createButtonVariant({
            backgroundColor: vars.colors.primary,
            labelColor: vars.colors.onPrimary,
            hoverBoxShadow: staticVars.elevation.level1,
            hoverOverlay: vars.colors.onPrimary,
            focusOverlay: vars.colors.onPrimary,
            activeOverlay: vars.colors.onPrimary,
          }),
        },
      ],
      tonal: [
        {
          ...createButtonVariant({
            backgroundColor: vars.colors.secondaryContainer,
            labelColor: vars.colors.onSecondaryContainer,
            hoverBoxShadow: staticVars.elevation.level1,
            hoverOverlay: vars.colors.onSecondaryContainer,
            focusOverlay: vars.colors.onSecondary,
            activeOverlay: vars.colors.onSecondary,
          }),
        },
      ],
      outlined: [
        {
          ...createButtonVariant({
            backgroundColor: vars.colors.outlineVariant,
            labelColor: vars.colors.onSurfaceVariant,
            hoverOverlay: vars.colors.onSurfaceVariant,
            focusOverlay: vars.colors.onSurfaceVariant,
            activeOverlay: vars.colors.onSurfaceVariant,
          }),
        },
      ],
      text: [
        {
          color: vars.colors.primary,
          selectors: {
            "&[data-hover]": {
              backgroundColor: `rgba(${hexToRgb(vars.colors.primary)}, 0.08)`,
            },
            "&[data-focus]": {
              backgroundColor: `rgba(${hexToRgb(vars.colors.primary)}, 0.1)`,
            },
            "&[data-active]": {
              backgroundColor: `rgba(${hexToRgb(vars.colors.primary)}, 0.1)`,
            },
          },
        },
      ],
    },
    size: {
      xs: [
        {
          ...createButtonSize({
            height: "32px",
            outlineWidth: "1px",
            padding: "0 12px",
            gap: 8,
          }),
        },
      ],
      sm: [
        {
          ...createButtonSize({
            height: "40px",
            outlineWidth: "1px",
            padding: "0 16px",
            gap: 8,
          }),
        },
      ],
      md: [
        {
          ...createButtonSize({
            height: "56px",
            outlineWidth: "1px",
            padding: "0 24px",
            gap: 8,
          }),
        },
      ],
      lg: [
        {
          ...createButtonSize({
            height: "96px",
            outlineWidth: "2px",
            padding: "0 48px",
            gap: 12,
          }),
        },
      ],
      xl: [
        {
          ...createButtonSize({
            height: "136px",
            outlineWidth: "3px",
            padding: "0 64px",
            gap: 16,
          }),
        },
      ],
    },
    shape: {
      round: [],
      square: [],
    },
  },
  compoundVariants: [
    {
      variants: { shape: "round", size: "xs" },
      style: { borderRadius: staticVars.shape.corner.full },
    },
    {
      variants: { shape: "square", size: "xs" },
      style: { borderRadius: 12 },
    },
    {
      variants: { shape: "round", size: "sm" },
      style: { borderRadius: staticVars.shape.corner.full },
    },
    {
      variants: { shape: "square", size: "sm" },
      style: { borderRadius: staticVars.shape.corner.medium },
    },
    {
      variants: { shape: "round", size: "md" },
      style: { borderRadius: staticVars.shape.corner.full },
    },
    {
      variants: { shape: "square", size: "md" },
      style: { borderRadius: staticVars.shape.corner.large },
    },
    {
      variants: { shape: "round", size: "lg" },
      style: { borderRadius: staticVars.shape.corner.full },
    },
    {
      variants: { shape: "square", size: "lg" },
      style: { borderRadius: staticVars.shape.corner["extra-large"] },
    },
    {
      variants: { shape: "round", size: "xl" },
      style: { borderRadius: staticVars.shape.corner.full },
    },
    {
      variants: { shape: "square", size: "xl" },
      style: { borderRadius: staticVars.shape.corner["extra-large"] },
    },
  ],
  defaultVariants: {
    size: "sm",
    shape: "round",
    variants: "filled",
  },
});

export const md3ButtonIconSize = styleVariants({
  xs: { width: "20px", height: "20px" },
  sm: { width: "20px", height: "20px" },
  md: { width: "24px", height: "24px" },
  lg: { width: "32px", height: "32px" },
  xl: { width: "40px", height: "40px" },
});

export type Md3ButtonStyleProps = Required<
  NonNullable<RecipeVariants<typeof md3Button>>
>;
