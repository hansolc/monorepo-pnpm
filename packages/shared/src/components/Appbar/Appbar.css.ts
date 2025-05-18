import { style, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

const appbarContainerBase = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const appbarContainer = styleVariants({
  sm: [appbarContainerBase, { flexDirection: "row", gap: 24 }],
  md: [appbarContainerBase, { flexDirection: "column" }],
  lg: [appbarContainerBase, { flexDirection: "column" }],
});

export const appbarTextAlign = styleVariants({
  left: { marginRight: "auto" },
  center: {},
  right: { marginLeft: "auto" },
});

export const appbarMdLgInnerContainer = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }),
]);
