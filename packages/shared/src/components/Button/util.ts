import { CSSProperties } from "@vanilla-extract/css";
import { vars } from "../../styles/theme/color.css";

interface BackgroundOpacityStyleProps {
  bg?: keyof typeof vars.colors;
  opacity: 0.08 | 0.1;
  outline?: string;
  outlineColor?: keyof typeof vars.colors;
}

export const backgroundOpacityStyle = ({
  bg,
  opacity,
  outline,
  outlineColor,
  ...rest
}: BackgroundOpacityStyleProps): CSSProperties => ({
  content: '""',
  position: "absolute",
  inset: 0,
  backgroundColor: `${bg ? vars.colors[bg] : "transparent"} !important`,
  borderRadius: "inherit",
  opacity: opacity,
  transition: "opacity 0.2s",
  ...(outline && outlineColor
    ? { outline: outline, outlineColor: `${vars.colors[outlineColor]}` }
    : {}),
  ...(outlineColor
    ? { outline: "1px solid", outlineColor: `${vars.colors[outlineColor]}` }
    : {}),
  ...rest,
});
