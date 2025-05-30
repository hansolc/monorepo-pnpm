import React from "react";
import { InputStateTypes } from "../types";

const useIsTyping = ({
  value,
  state,
}: {
  value: string;
  state?: InputStateTypes;
}) => {
  const isTyping = value.length > 0 || state === "focused";

  return {
    isTyping,
  };
};

export default useIsTyping;
