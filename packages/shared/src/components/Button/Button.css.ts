import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme/color.css";
import { backgroundOpacityStyle } from "./util";

export const storiesButton = recipe({
  base: {
    display: "inline-flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    padding: "10px 24px",
    borderRadius: 100,
    cursor: "pointer",
    gap: 8,
    outline: "none",
    alignSelf: "center",
    ":disabled": {
      backgroundColor: "rgba(23,28,30,0.12) !important",
      cursor: "not-allowed",
      color: "rgba(23,28,30,0.38) !important",
    },
  },
  variants: {
    size: {
      sm: { height: 35, fontSize: "0.75rem" },
      md: { height: 40, fontSize: "0.875rem" },
      lg: { height: 45, fontSize: "1.125rem" },
    },
    ty: {
      elevated: [
        sprinkles({
          position: "relative",
          color: {
            default: "primary",
            hover: "primary",
            focus: "primary",
            active: "primary",
          },
          boxShadow: {
            default: "level1",
            hover: "level2",
            focus: "level1",
            active: "level1",
          },
          backgroundColor: "surfaceContainerLow",
        }),
        {
          selectors: {
            "&:not(:disabled):hover::after": backgroundOpacityStyle({
              bg: "primary",
              opacity: 0.08,
            }),
            "&:not(:disabled):focus::after": backgroundOpacityStyle({
              bg: "primary",
              opacity: 0.1,
              outline: `2px solid`,
              outlineColor: "secondary",
            }),
            "&:not(:disabled):active::after": backgroundOpacityStyle({
              bg: "primary",
              opacity: 0.1,
            }),
          },
        },
      ],
      filled: [
        sprinkles({
          position: "relative",
          color: "onPrimary",
          boxShadow: {
            default: "level0",
            hover: "level1",
            focus: "level0",
            active: "level0",
          },
          bg: "primary",
        }),
        {
          selectors: {
            "&:not(:disabled):hover::after": backgroundOpacityStyle({
              bg: "onPrimary",
              opacity: 0.08,
            }),
            "&:not(:disabled):focus::after": backgroundOpacityStyle({
              bg: "onPrimary",
              opacity: 0.1,
            }),
            "&:not(:disabled):active::after": backgroundOpacityStyle({
              bg: "onPrimary",
              opacity: 0.1,
            }),
          },
        },
      ],
      filledTonal: [
        sprinkles({
          position: "relative",
          color: "onSecondaryContainer",
          boxShadow: {
            default: "level0",
            hover: "level1",
            focus: "level0",
            active: "level0",
          },
          bg: "secondaryContainer",
        }),
        {
          selectors: {
            "&:not(:disabled):hover::after": backgroundOpacityStyle({
              bg: "onSecondaryContainer",
              opacity: 0.08,
            }),
            "&:not(:disabled):focus::after": backgroundOpacityStyle({
              bg: "onSecondaryContainer",
              opacity: 0.1,
            }),
            "&:not(:disabled):active::after": backgroundOpacityStyle({
              bg: "onSecondaryContainer",
              opacity: 0.1,
            }),
          },
        },
      ],
      outlined: [
        sprinkles({
          position: "relative",
          color: "primary",
        }),
        {
          backgroundColor: "transparent",
          outline: `1px solid ${vars.colors.outline}`,
          selectors: {
            "&:not(:disabled):hover::after": backgroundOpacityStyle({
              bg: "primary",
              opacity: 0.08,
              outlineColor: "outline",
            }),
            "&:not(:disabled):focus::after": backgroundOpacityStyle({
              bg: "primary",
              opacity: 0.1,
              outlineColor: "primary",
            }),
            "&:not(:disabled):active::after": backgroundOpacityStyle({
              bg: "primary",
              opacity: 0.1,
              outlineColor: "outline",
            }),
          },
        },
      ],
      text: [
        sprinkles({
          boxShadow: "level0",
          color: "primary",
        }),
        {
          backgroundColor: "transparent",
          selectors: {
            "&:not(:disabled):hover::after": backgroundOpacityStyle({
              bg: "primary",
              opacity: 0.08,
            }),
            "&:not(:disabled):focus::after": backgroundOpacityStyle({
              bg: "primary",
              opacity: 0.1,
            }),
            "&:not(:disabled):active::after": backgroundOpacityStyle({
              bg: "primary",
              opacity: 0.1,
            }),
          },
        },
      ],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const buttonIcon = styleVariants({
  sm: { width: "1rem", height: "1rem" },
  md: { width: "1.125rem", height: "1.125rem" },
  lg: { width: "1.25rem", height: "1.25rem" },
});

export type StoriesButtonProps = Required<
  NonNullable<RecipeVariants<typeof storiesButton>>
>;
