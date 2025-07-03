import { Fragment, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from ".";
import { sprinkles } from "@styles/sprinkles.css";

const meta = {
  title: "Components/Tabs",
};

export default meta;

export const Example = {
  render: () => {
    return (
      <TabGroup>
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>panel1</TabPanel>
          <TabPanel>panel2</TabPanel>
          <TabPanel>panel3</TabPanel>
        </TabPanels>
      </TabGroup>
    );
  },
};

export const Controlled = {
  render: () => {
    const [selectedIndex, onChange] = useState(0);
    const options = ["tab1", "tab2", "tab3"];

    return (
      <TabGroup selectedIndex={selectedIndex} onChange={onChange}>
        <TabList className={sprinkles({ display: "flex" })}>
          {options.map((o, idx) => (
            <Tab as={Fragment} key={idx}>
              {({ hover, selected, disabled, focus, active }) => {
                return <div>{o}</div>;
              }}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>panel1</TabPanel>
          <TabPanel>panel2</TabPanel>
          <TabPanel>panel3</TabPanel>
        </TabPanels>
      </TabGroup>
    );
  },
};
