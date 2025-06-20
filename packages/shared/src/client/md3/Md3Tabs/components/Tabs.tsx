import React, { Fragment } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { md3TabsGroup } from "./Tabs.css";
import TabItem from "./TabItem";
import { sprinkles } from "@styles/sprinkles.css";
import { IconType } from "react-icons";

interface Props {
  options: Array<{ label: string; icon?: IconType }>;
  selectedIndex?: number;
  onChange?: (option: number | undefined) => void;
  children?: React.ReactNode;
}

function Tabs({ options, selectedIndex, onChange, children }: Props) {
  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={onChange}
      //   defaultIndex={undefined}
      className={clsx(md3TabsGroup)}
    >
      <TabList className={sprinkles({ display: "flex" })}>
        {options.map(({ label, icon }) => (
          <Tab as={Fragment} key={`tablist-tab-${label}`}>
            {({ hover, selected, disabled, ...rest }) => (
              <TabItem
                icon={icon}
                hover={hover}
                selected={selected}
                disabled={disabled}
                {...rest}
              >
                {label}
              </TabItem>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {React.Children.map(children, (child, index) => (
          <TabPanel key={`tabpanel-${index}`}>{child}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

export default Tabs;
