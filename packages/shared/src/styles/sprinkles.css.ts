import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { shadow, vars } from "./theme/color.css";

const spacingValues = [4, 8, 12, 16];

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

const flexSprinklesProperties = defineProperties({
  properties: {
    display: ["flex", "block"],
    flexDirection: ["row", "column"],
    justifyContent: ["center", "space-between"],
    alignItems: ["center"],
    flexWrap: ["wrap"],
    gap: spacingValues,
    flexGrow: [0, 1],
  },
});

const areaSprinklesProperties = defineProperties({
  properties: {
    width: ["100%"],
  },
});

const spacingSprinklesProperties = defineProperties({
  properties: {
    paddingTop: spacingValues,
    paddingLeft: spacingValues,
    paddingBottom: spacingValues,
    paddingRight: spacingValues,
  },
  shorthands: {
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingBottom", "paddingTop"],
  },
});

export const sprinkles = createSprinkles(
  colorSprinklesProperties,
  layerSprinklesProperties,
  flexSprinklesProperties,
  areaSprinklesProperties,
  spacingSprinklesProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
