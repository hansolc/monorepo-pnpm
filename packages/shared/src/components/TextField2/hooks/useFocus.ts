import React, { useEffect, useState } from "react";
import { InputStateTypes } from "../types";

interface Props {
  disabled?: boolean;
}

const useFocus = ({ disabled }: Props) => {
  const [inputState, setInputState] = useState<InputStateTypes>(
    disabled ? "disabled" : "blur"
  );

  useEffect(() => {
    if (disabled) {
      setInputState("disabled");
    } else {
      setInputState("blur");
    }
  }, [disabled]);

  const onFocus = () => {
    if (inputState !== "disabled") {
      setInputState("focused");
    }
  };

  const onBlur = () => {
    if (inputState !== "disabled") {
      setInputState("blur");
    }
  };

  return {
    inputState,
    focusEvents: {
      onFocus,
      onBlur,
    },
  };
};

export default useFocus;
