// background.css.ts
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const backgroundRecipe = recipe({
  base: {
    backgroundColor: "transparent",
  },
  variants: {
    size: {
      contain: { backgroundSize: "contain" },
      cover: { backgroundSize: "cover" },
      auto: { backgroundSize: "auto" },
    },
    repeat: {
      "no-repeat": { backgroundRepeat: "no-repeat" },
      repeat: { backgroundRepeat: "repeat" },
    },
    position: {
      top: { backgroundPosition: "top" },
      bottom: { backgroundPosition: "bottom" },
      left: { backgroundPosition: "left" },
      right: { backgroundPosition: "right" },
      center: { backgroundPosition: "center" },
    },
  },
  defaultVariants: {
    size: "cover",
    repeat: "no-repeat",
    position: "center",
  },
});

export type BackgroundStyleVariants = Required<
  NonNullable<RecipeVariants<typeof backgroundRecipe>>
>;
