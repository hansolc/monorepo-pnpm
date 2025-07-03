import { useEffect, useRef, useState } from "react";
import {
  createInteractionHook,
  ReturnStateType,
} from "./hoc/createInteractionHook";
import { Keys } from "src/utils/keyboard";

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
}: {
  disabled?: boolean;
}): ReturnStateType<"onFocus" | "onBlur"> {
  const [isFocusVisible, setFocusVisible] = useState(false);
  const hadKeyboardEvent = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === Keys.ArrowRight) {
        console.log("arrowright");
        hadKeyboardEvent.current = true;
      }
    };
    const handlePointer = () => (hadKeyboardEvent.current = false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handlePointer);
    window.addEventListener("pointerdown", handlePointer);
    window.addEventListener("touchstart", handlePointer);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handlePointer);
      window.removeEventListener("pointerdown", handlePointer);
      window.removeEventListener("touchstart", handlePointer);
    };
  }, []);

  const onFocus = () => {
    console.log(hadKeyboardEvent.current, disabled);
    if (!disabled && hadKeyboardEvent.current) {
      console.log("123123");
      setFocusVisible(true);
    }
  };

  const onBlur = () => {
    setFocusVisible(false);
  };

  return {
    state: isFocusVisible,
    eventProps: { onFocus, onBlur },
    dataProps: isFocusVisible ? { [`data-focus`]: "" } : {},
  };
}
