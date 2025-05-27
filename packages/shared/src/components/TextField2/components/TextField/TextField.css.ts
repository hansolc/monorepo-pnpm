import { style } from "@vanilla-extract/css";
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
    padding: "0 1rem",
    height: 56,
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

const baseInput = style([
  {
    fontSize: "1rem",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    width: "100%",
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
      style: { top: "-0.5rem" },
    },
    {
      variants: { outlined: true, floated: true },
      style: { top: "-1.1rem", left: "0", backgroundColor: "white" },
    },
  ],
});
