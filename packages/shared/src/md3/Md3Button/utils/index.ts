import { hexToRgb } from "src/utils/style";

type ButtonStateColors = {
  backgroundColor: string;
  labelColor: string;
  boxShadow?: string;
  hoverBoxShadow?: string;
  hoverOverlay?: string;
  focusOverlay?: string;
  activeOverlay?: string;
};

type ButtonSizeProperties = {
  height: string;
  outlineWidth: string;
  padding: string;
  gap: number;
};

export const createButtonVariant = ({
  backgroundColor,
  labelColor,
  boxShadow,
  hoverBoxShadow,
  hoverOverlay,
  focusOverlay,
  activeOverlay,
}: ButtonStateColors) => ({
  backgroundColor,
  color: labelColor,
  ...(boxShadow && { boxShadow }),
  selectors: {
    "&[data-hover]": {
      backgroundColor: `rgba(${hexToRgb(
        hoverOverlay ?? backgroundColor
      )}, 0.08)`,
      ...(hoverBoxShadow && { boxShadow: hoverBoxShadow }),
    },
    "&[data-focus]": {
      backgroundColor: `rgba(${hexToRgb(
        focusOverlay ?? backgroundColor
      )}, 0.1)`,
    },
    "&[data-active]": {
      backgroundColor: `rgba(${hexToRgb(
        activeOverlay ?? backgroundColor
      )}, 0.1)`,
    },
  },
});

export const createButtonSize = ({
  height,
  outlineWidth,
  padding,
  gap,
}: ButtonSizeProperties) => ({
  height,
  outlineWidth,
  padding,
  gap,
});
