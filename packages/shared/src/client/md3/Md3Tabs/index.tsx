import React, { Fragment } from "react";
import clsx from "clsx";
import { md3TabsGroup } from "./components/Tabs.css";
import TabItem from "./components/TabItem";
import { sprinkles } from "@styles/sprinkles.css";
import { IconType } from "react-icons";
import { flattenChildren } from "./utils";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "src/client/base";

interface Props {
  options: Array<{ label: string; icon?: IconType }>;
  selectedIndex?: number;
  onChange?: (option: number | undefined) => void;
  children?: React.ReactNode;
  className?: string;
}

function Tabs({
  options,
  selectedIndex,
  onChange,
  children,
  className,
}: Props) {
  const flatChildren = flattenChildren(children);

  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={onChange}
      //   defaultIndex={undefined}
      className={clsx(md3TabsGroup, className)}
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
        {flatChildren.map((child, index) => (
          <TabPanel key={`tabpanel-${index}`}>{child}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

export default Tabs;
