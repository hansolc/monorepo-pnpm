import React, { useRef } from "react";
import { useTabsContext } from "../context/TabsContext";
import useTabKeyboardFunc from "../hooks/useTabKeyDown";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function TabList({ children, ...props }: Props) {
  const { ariaLabel } = useTabsContext();
  const tabKeyboardEvent = useTabKeyboardFunc();

  return (
    <div
      aria-labelledby={`tablist-${ariaLabel}`}
      role="tablist"
      {...tabKeyboardEvent}
      {...props}
    >
      {children}
    </div>
  );
}

export default TabList;
