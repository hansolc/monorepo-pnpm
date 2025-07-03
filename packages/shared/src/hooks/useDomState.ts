import { useCallback, useEffect, useRef, useState } from "react";
import {
  createInteractionHook,
  ReturnStateType,
} from "./hoc/createInteractionHook";
import { Keys } from "src/utils/keyboard";
import useEvent from "./useEvent";

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

export function useFocusVisible({
  disabled,
  triggerFocusEvent,
}: {
  triggerFocusEvent: (e: KeyboardEvent) => boolean;
  disabled?: boolean;
}): ReturnStateType<"onFocus" | "onBlur"> {
  const [isFocusVisible, setFocusVisible] = useState(false);
  const [isKeyboardEvent, setIsKeyboardEvent] = useState(false);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (triggerFocusEvent(e)) {
        setIsKeyboardEvent(true);
      }
    },
    [triggerFocusEvent]
  );

  const onFocusWithoutKeyboard = useCallback(() => {
    setIsKeyboardEvent(false);
  }, []);

  const onFocus = useCallback(() => {
    if (!disabled && isKeyboardEvent) {
      setFocusVisible(true);
    }
  }, [disabled, isKeyboardEvent]);

  const onBlur = useCallback(() => {
    setFocusVisible(false);
    setIsKeyboardEvent(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onFocusWithoutKeyboard);
    document.addEventListener("pointerdown", onFocusWithoutKeyboard);
    document.addEventListener("touchstart", onFocusWithoutKeyboard);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onFocusWithoutKeyboard);
      document.removeEventListener("pointerdown", onFocusWithoutKeyboard);
      document.removeEventListener("touchstart", onFocusWithoutKeyboard);
    };
  }, []);

  return {
    state: isFocusVisible,
    eventProps: { onFocus, onBlur },
    dataProps: isFocusVisible ? { [`data-focus`]: "" } : {},
  };
}
