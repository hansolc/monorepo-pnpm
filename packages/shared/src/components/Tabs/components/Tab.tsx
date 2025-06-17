import React, { useRef } from "react";
import { useTabsContext } from "../context/TabsContext";
import { RenderPropsTab } from "../types";
import useHover from "@hooks/useHover";
import useDataAttribute from "@hooks/useDataAttribute";

interface Props {
  value: string;
  children?: React.ReactNode | RenderPropsTab;
  as?: React.ElementType;
  className?: string;
}

function Tab({ as: Component = "button", value, children, ...props }: Props) {
  const { onSelect, selected, registerTab } = useTabsContext();
  const { hover: isHover } = useHover();
  const isSelected = selected === value;
  const isRenderFn = typeof children === "function";
  const dataAttributes = useDataAttribute({ isSelected, isHover });
  const internalRef = useRef<HTMLElement | null>(null);

  const combinedRef = (node: HTMLElement | null) => {
    internalRef.current = node;
    registerTab?.(node);
  };

  const tabProps = {
    id: `tab-${value}`,
    role: "tab",
    "aria-selected": isSelected,
    "aria-controls": `tabpanel-${value}`,
    tabIndex: isSelected ? 0 : -1,
    onClick: () => onSelect?.(value),
    ref: combinedRef,
    ...dataAttributes,
    ...props,
  };

  return isRenderFn ? (
    (children as RenderPropsTab)({
      selected: isSelected,
      hover: isHover,
      props: tabProps,
    })
  ) : (
    <Component {...tabProps}>{children ?? value}</Component>
  );
}

export default Tab;
