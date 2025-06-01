import React, { PropsWithChildren, useRef } from "react";
import {
  DropdownProvider,
  useDropdownContext,
} from "./context/DropdownContext";
import useClickOutside from "./hooks/useClickOutside";
import { PropsWithChildrenStyle } from "src/types";
import clsx from "clsx";

interface Props {
  value?: string;
  onChange?: (value?: string) => void;
}

const DropdownRoot = ({
  children,
  value,
  onChange,
}: PropsWithChildren<Props>) => {
  return (
    <DropdownProvider value={value} onChange={onChange}>
      {children}
    </DropdownProvider>
  );
};

const Trigger = ({ as }: { as: React.ReactElement }) => {
  const { toggle } = useDropdownContext();
  return React.cloneElement(as, {
    ...as.props,
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      as.props.onClick?.(e);
      toggle();
    },
  });
};

const Menu = ({ children, className = "" }: PropsWithChildrenStyle) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isOpen, toggle } = useDropdownContext();
  useClickOutside({ ref, onClickOutside: toggle });

  if (!isOpen) return null;

  return (
    <div ref={ref} className={clsx(className)}>
      {children}
    </div>
  );
};

const Item = ({
  children,
  className = "",
  value,
}: PropsWithChildren<{ className?: string; value: string }>) => {
  const { onChange, toggle } = useDropdownContext();
  return (
    <option
      className={clsx(className)}
      onClick={(e: React.MouseEvent<HTMLOptionElement>) => {
        onChange?.(value);
        toggle();
      }}
    >
      {children}
    </option>
  );
};

const Dropdown = Object.assign(DropdownRoot, {
  Trigger,
  Menu,
  Item,
});

export default Dropdown;
