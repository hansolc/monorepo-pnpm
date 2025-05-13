import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const storiesTypography = recipe({
  base: {
    fontFamily: "Roboto, sans-serif",
  },
  variants: {
    ty: {
      display: { fontWeight: 400 },
      headline: { fontWeight: 400 },
      title: { fontWeight: 500 },
      body: { fontWeight: 400 },
      label: { fontWeight: 500 },
    },
    size: {
      large: {},
      medium: {},
      small: {},
    },
  },
  compoundVariants: [
    // Display
    {
      variants: { ty: "display", size: "large" },
      style: {
        fontSize: "57px",
        lineHeight: "64px",
        letterSpacing: "-0.25px",
      },
    },
    {
      variants: { ty: "display", size: "medium" },
      style: {
        fontSize: "45px",
        lineHeight: "52px",
        letterSpacing: "0px",
      },
    },
    {
      variants: { ty: "display", size: "small" },
      style: {
        fontSize: "36px",
        lineHeight: "44px",
        letterSpacing: "0px",
      },
    },

    // Headline
    {
      variants: { ty: "headline", size: "large" },
      style: {
        fontSize: "32px",
        lineHeight: "40px",
        letterSpacing: "0px",
      },
    },
    {
      variants: { ty: "headline", size: "medium" },
      style: {
        fontSize: "28px",
        lineHeight: "36px",
        letterSpacing: "0px",
      },
    },
    {
      variants: { ty: "headline", size: "small" },
      style: {
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: "0px",
      },
    },

    // Title
    {
      variants: { ty: "title", size: "large" },
      style: {
        fontSize: "22px",
        lineHeight: "28px",
        letterSpacing: "0px",
      },
    },
    {
      variants: { ty: "title", size: "medium" },
      style: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.15px",
      },
    },
    {
      variants: { ty: "title", size: "small" },
      style: {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
      },
    },

    // Body
    {
      variants: { ty: "body", size: "large" },
      style: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.5px",
      },
    },
    {
      variants: { ty: "body", size: "medium" },
      style: {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.25px",
      },
    },
    {
      variants: { ty: "body", size: "small" },
      style: {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.4px",
      },
    },

    // Label
    {
      variants: { ty: "label", size: "large" },
      style: {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
      },
    },
    {
      variants: { ty: "label", size: "medium" },
      style: {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.5px",
      },
    },
    {
      variants: { ty: "label", size: "small" },
      style: {
        fontSize: "11px",
        lineHeight: "16px",
        letterSpacing: "0.5px",
      },
    },
  ],
});

export type StoriesTypogrphyProps = Required<
  NonNullable<RecipeVariants<typeof storiesTypography>>
>;
