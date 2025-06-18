import { style } from "@vanilla-extract/css";

export const storieTab = style({
  selectors: {
    "&[data-selected]": {
      outline: "2px solid black",
    },
  },
});
