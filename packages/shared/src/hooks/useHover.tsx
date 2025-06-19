import React, { useState } from "react";

interface Props {
  onHoverCallback?: (e: React.MouseEvent<HTMLElement>) => void;
  onLeaveCallback?: (e: React.MouseEvent<HTMLElement>) => void;
}

function useHover({ onHoverCallback, onLeaveCallback }: Props = {}) {
  const [hover, setHover] = useState(false);
  return {
    hover,
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      setHover(true);
      onHoverCallback?.(e);
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      setHover(false);
      onLeaveCallback?.(e);
    },
  };
}

export default useHover;
