import React, { forwardRef } from "react";
import { IconType } from "react-icons";
import { md3TabItem } from "./index.css";
import { Typography } from "src/server";

interface TabItemProps {
  icon?: IconType;
  hover?: boolean;
  selected?: boolean;
  disabled?: boolean;
  focus?: boolean;
  active?: boolean;
  autofocus?: boolean;
  children: React.ReactNode;
}

const TabItem = forwardRef<HTMLButtonElement, TabItemProps>((props, ref) => {
  const {
    icon: Icon,
    children,
    hover,
    selected,
    disabled,
    active,
    autofocus,
    focus,
    ...rest
  } = props;
  return (
    <button
      className={md3TabItem({ hover, selected, disabled, active })}
      {...rest}
      ref={ref}
    >
      {Icon && <Icon size="24" />}
      <Typography variants="title" size="sm">
        {children}
      </Typography>
    </button>
  );
});

export default TabItem;
