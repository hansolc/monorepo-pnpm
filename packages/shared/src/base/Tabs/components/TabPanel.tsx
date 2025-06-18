import React from "react";
import { useTabsContext } from "../context/TabsContext";

interface Props {
  value: string;
  children?: React.ReactNode;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

// mountonEnter, mountOnExit
// TabPanel내의내용들이 무거울 경우 최적화 옵션
function TabPanel({ value, children, mountOnEnter, unmountOnExit }: Props) {
  const { selected } = useTabsContext();
  const isSelected = selected === value;

  if (unmountOnExit && !isSelected) return null;

  if (mountOnEnter && !isSelected) return null;

  return (
    <div
      id={`tabpanel-${value}`}
      role="tabpanel"
      aria-labelledby={`tab-${value}`}
      tabIndex={isSelected ? 0 : -1}
      hidden={!isSelected}
      aria-hidden={!isSelected}
    >
      {children}
    </div>
  );
}

export default TabPanel;
