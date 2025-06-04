import React from "react";

interface Props {
  onFocusCallback?: (e: React.FocusEvent<HTMLElement>) => void;
  onBlurCallback?: (e: React.FocusEvent<HTMLElement>) => void;
}

const useFocus = ({ onFocusCallback, onBlurCallback }: Props) => {
  return {
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      onFocusCallback?.(e);
    },
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      onBlurCallback?.(e);
    },
  };
};

export default useFocus;
