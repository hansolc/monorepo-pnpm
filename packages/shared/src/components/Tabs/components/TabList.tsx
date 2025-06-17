import React, { useContext } from "react";
import { useTabsContext } from "../context/TabsContext";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const TabList = ({ children, ...props }: Props) => {
  const { ariaLabel } = useTabsContext();
  return (
    <div aria-labelledby={`tablist-${ariaLabel}`} role="tablist" {...props}>
      {children}
    </div>
  );
};

export default TabList;
