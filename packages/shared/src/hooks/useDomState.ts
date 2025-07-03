import { createInteractionHook } from "./hoc/createInteractionHook";

export const useHover = createInteractionHook("hover", {
  onMouseEnter: () => true,
  onMouseLeave: () => false,
});

export const useFocus = createInteractionHook("focus", {
  onFocus: () => true,
  onBlur: () => false,
});

export const useActive = createInteractionHook("active", {
  onMouseDown: () => true,
  onMouseUp: () => false,
});
