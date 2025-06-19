import React, { useRef } from "react";
import { useTabsContext } from "../context/TabsContext";

const useTabKeyboardFunc = () => {
  const { tabRefs } = useTabsContext();

  const withFocusIndex = (
    callback: (focusIndex: number, total: number) => void
  ) => {
    const total = tabRefs.current.length;
    const focusIndex = tabRefs.current.findIndex(
      (tab) => tab === document.activeElement
    );
    if (focusIndex === -1) return;
    callback(focusIndex, total);
  };

  const moveRight = () =>
    withFocusIndex((focusIndex, total) => {
      const next = (focusIndex + 1) % total;
      tabRefs.current[next]?.focus();
    });

  const moveLeft = () =>
    withFocusIndex((focusIndex, total) => {
      const prev = (focusIndex - 1 + total) % total;
      tabRefs.current[prev]?.focus();
    });

  const triggerTab = () =>
    withFocusIndex((focusIndex) => {
      tabRefs.current[focusIndex]?.click();
    });

  return {
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          moveRight();
          break;
        case "Tab":
          e.preventDefault();
          moveRight();
          break;
        case "ArrowLeft":
          e.preventDefault();
          moveLeft();
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          triggerTab();
          break;
        default:
          break;
      }
    },
  };
};

export default useTabKeyboardFunc;
