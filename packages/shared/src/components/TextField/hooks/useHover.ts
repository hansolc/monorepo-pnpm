import React, { useState } from "react";
import { InputStateTypes } from "../types";

interface Props {
  inputState: InputStateTypes;
}

const useHover = ({ inputState }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = (e: React.MouseEvent<HTMLFieldSetElement>) => {
    if (inputState !== "disabled" && inputState !== "focused") {
      setIsHovered(true);
    }
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLFieldSetElement>) => {
    if (inputState !== "disabled") {
      setIsHovered(false);
    }
  };

  return {
    isHovered,
    hoverEvents: {
      onMouseEnter,
      onMouseLeave,
    },
  };
};

export default useHover;
