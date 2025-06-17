import React from "react";
import { useTabsContext } from "../context/TabsContext";

interface Props {
  value: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}

const Tab = ({ as: Component = "button", value, children }: Props) => {
  const { onSelect, selected } = useTabsContext();

  return (
    <Component
      id={`tab-${value}`}
      role="tab"
      aria-selected={selected === value}
      aria-controls={`tabpanel-${value}`}
      tabIndex={selected === value ? 0 : -1}
      onClick={() => onSelect?.(value)}
    >
      {children ?? value}
    </Component>
  );
};

export default Tab;
