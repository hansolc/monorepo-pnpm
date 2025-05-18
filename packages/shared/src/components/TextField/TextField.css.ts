import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkles.css";
import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../styles/theme/color.css";

export const textField = recipe({
  base: { width: "100%" },
});

export const textFieldInputArea = recipe({
  base: [
    sprinkles({
      display: "flex",
      alignItems: "center",
      backgroundColor: "surfaceContainerHighest",
    }),
    {
      padding: "8px 16px",
      gap: 16,
      borderBottom: `1px solid ${vars.colors.primary}`,
    },
  ],
  variants: {
    activeState: {
      enable: {},
      focus: { borderBottomWidth: "2px" },
      disabled: {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },
    hasError: {
      true: { borderColor: vars.colors.error },
      false: {},
    },
  },
});

export const textFieldLabelInputArea = recipe({
  base: [sprinkles({ display: "flex" }), { flexGrow: 1 }],
  variants: {
    isFloat: {
      true: { flexDirection: "column" },
      false: { flexDirection: "row" },
    },
  },
});

export const textFieldLabel = recipe({
  base: { fontSize: 14, transition: "color 0.2s ease" },
  variants: {
    activeState: {
      enable: [sprinkles({ color: "onSurfaceVariant" })],
      focus: [sprinkles({ color: "primary" })],
      disabled: [sprinkles({ color: "outline" })],
    },
    hasError: {
      true: { color: vars.colors.error },
    },
    isFloat: {
      true: { position: "relative" },
      false: { position: "absolute" },
    },
  },
  compoundVariants: [
    {
      variants: { hasError: true },
      style: { color: vars.colors.error },
    },
  ],
});

export const textFieldInput = recipe({
  base: [
    sprinkles({ color: "onSurface", width: "100%" }),
    {
      outline: "none",
      border: "none",
      backgroundColor: "transparent",
      fontSize: 16,
    },
  ],
  variants: {
    activeState: {
      enable: {},
      focus: {},
      disabled: {},
    },
    hasError: {
      true: [sprinkles({ color: "error" })],
      false: {},
    },
  },
});

export const TextFieldSupportingText = recipe({
  base: [sprinkles({ color: "onSurfaceVariant" })],
  variants: {
    activeState: {
      enable: {},
      focus: {},
      disabled: {},
    },
    hasError: {
      true: { color: vars.colors.error },
      false: {},
    },
  },
});

export type StoriesTextFieldProps = Required<
  NonNullable<RecipeVariants<typeof textField>>
>;
