import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { shadow, vars } from "./theme/color.css";

const colorSprinklesProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:not(:disabled):hover" },
    focus: { selector: "&:not(:disabled):focus" },
    after: { selector: "&:after" },
    active: { selector: "&:not(:disabled):active" },
  },
  defaultCondition: "default",
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
    borderColor: vars.colors,
    opacity: [0.08],
    boxShadow: shadow,
    outlineColor: vars.colors,
  },
  shorthands: {
    bg: ["backgroundColor"],
    bs: ["boxShadow"],
  },
});

const layerSprinklesProperties = defineProperties({
  properties: {
    position: ["relative", "absolute"],
    inset: [0],
    outlineWidth: [1],
    outlineStyle: ["solid"],
  },
});

export const sprinkles = createSprinkles(
  colorSprinklesProperties,
  layerSprinklesProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
