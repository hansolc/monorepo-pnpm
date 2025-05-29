import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../../styles/sprinkles.css";
import { vars } from "../../../../styles/theme/color.css";

const baseFieldset = style([
  sprinkles({
    display: "flex",
    gap: 16,
    alignItems: "center",
  }),
  {
    border: 0,
    padding: "1rem",
    // height: 56,
  },
]);

export const fieldSet = recipe({
  base: [baseFieldset],
  variants: {
    outlined: {
      true: [
        {
          border: `1px solid ${vars.colors.outline}`,
        },
      ],
      false: [
        sprinkles({
          backgroundColor: "surfaceContainerHighest",
        }),
        { borderBottom: `1px solid ${vars.colors.primary}` },
      ],
    },
    inputState: {
      focused: [],
      disabled: [
        {
          opacity: 0.5,
          pointerEvents: "none",
        },
      ],
      blur: [],
    },
    isHovered: {
      true: [
        {
          backgroundColor: "rgba(0,0,0,0.08)",
        },
      ],
      false: [],
    },
  },
  compoundVariants: [
    {
      variants: { outlined: false, inputState: "focused" },
      style: { borderBottomWidth: "2px" },
    },
    {
      variants: { outlined: true, inputState: "focused" },
      style: { border: `2px solid ${vars.colors.primary}` },
    },
  ],
});

const inputAreaContainerBase = style([
  sprinkles({ position: "relative", flex: 1 }),
]);

export const inputAreaContainer = recipe({
  base: [inputAreaContainerBase],
  variants: {
    outlined: {
      true: [],
      false: [],
    },
    inputState: {
      focused: [],
      disabled: [],
      blur: [],
    },
    hasValue: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      variants: { outlined: false, inputState: "focused" },
      style: { marginTop: "17px" },
    },
    {
      variants: { outlined: false, hasValue: true },
      style: { marginTop: 17 },
    },
  ],
});

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
    height: "20px",
  },
]);

export const input = recipe({
  base: [baseInput],
});

const baseLabel = style({
  position: "absolute",
  transition: "all 0.2s ease",
  fontSize: "1rem",
  left: 0,
});

export const label = recipe({
  base: [baseLabel],
  variants: {
    outlined: {
      true: [
        {
          top: "50%",
          transform: "translateY(-50%)",
        },
      ],
      false: [
        {
          top: "50%",
          transform: "translateY(-50%)",
        },
      ],
    },
    floated: {
      true: {
        fontSize: "0.75rem",
        color: vars.colors.primary,
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { outlined: false, floated: true },
      style: { top: "-0.7rem" },
    },
    {
      variants: { outlined: true, floated: true },
      style: { top: "-1.3rem", left: "0", backgroundColor: "white" },
    },
  ],
});

export const textFieldFix = styleVariants({
  prefix: [sprinkles({ color: "onSurfaceVariant", paddingRight: 4 })],
  suffix: [sprinkles({ color: "onSurfaceVariant", paddingLeft: 4 })],
});
