import { style, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const formContainer = style([
  sprinkles({ display: "flex", flexDirection: "column" }),
]);

export const formTitle = styleVariants({
  left: { textAlign: "left" },
  center: { textAlign: "center" },
  right: { textAlign: "right" },
});
