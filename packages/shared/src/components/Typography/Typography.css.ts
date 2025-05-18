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
      lg: {},
      md: {},
      sm: {},
    },
  },
  compoundVariants: [
    // Display
    {
      variants: { ty: "display", size: "lg" },
      style: {
        fontSize: "57px",
        lineHeight: "64px",
        letterSpacing: "-0.25px",
      },
    },
    {
      variants: { ty: "display", size: "md" },
      style: {
        fontSize: "45px",
        lineHeight: "52px",
        letterSpacing: "0px",
      },
    },
    {
      variants: { ty: "display", size: "sm" },
      style: {
        fontSize: "36px",
        lineHeight: "44px",
        letterSpacing: "0px",
      },
    },

    // Headline
    {
      variants: { ty: "headline", size: "lg" },
      style: {
        fontSize: "32px",
        lineHeight: "40px",
        letterSpacing: "0px",
      },
    },
    {
      variants: { ty: "headline", size: "md" },
      style: {
        fontSize: "28px",
        lineHeight: "36px",
        letterSpacing: "0px",
      },
    },
    {
      variants: { ty: "headline", size: "sm" },
      style: {
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: "0px",
      },
    },

    // Title
    {
      variants: { ty: "title", size: "lg" },
      style: {
        fontSize: "22px",
        lineHeight: "28px",
        letterSpacing: "0px",
      },
    },
    {
      variants: { ty: "title", size: "md" },
      style: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.15px",
      },
    },
    {
      variants: { ty: "title", size: "sm" },
      style: {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
      },
    },

    // Body
    {
      variants: { ty: "body", size: "lg" },
      style: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.5px",
      },
    },
    {
      variants: { ty: "body", size: "md" },
      style: {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.25px",
      },
    },
    {
      variants: { ty: "body", size: "sm" },
      style: {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.4px",
      },
    },

    // Label
    {
      variants: { ty: "label", size: "lg" },
      style: {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
      },
    },
    {
      variants: { ty: "label", size: "md" },
      style: {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.5px",
      },
    },
    {
      variants: { ty: "label", size: "sm" },
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
