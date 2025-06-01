import React, { ComponentProps, useState } from "react";
import Dropdown from "../Reusable/Dropdown/Dropdown";
import clsx from "clsx";
import { storiesMenu, storiesMenuItem } from "./Menu.css";

interface Props extends ComponentProps<typeof Dropdown> {
  options: Array<string>;
  trigger: React.ReactElement;
  valueAs?: (value: string) => string;
  onChange?: (value?: string | undefined) => void;
  selected?: string;
}

const Menu = ({
  options,
  valueAs = (value: string): string => value,
  selected,
  onChange,
  trigger,
}: Props) => {
  return (
    <Dropdown value={selected} onChange={onChange}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu className={clsx(storiesMenu())}>
        {options.map((option, idx) => {
          return (
            <Dropdown.Item
              key={idx}
              value={option}
              className={clsx(storiesMenuItem())}
            >
              {valueAs(option)}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Menu;
