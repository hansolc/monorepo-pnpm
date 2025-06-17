import { useState } from "react";
import { TabProvider, TabLabel, TabList, TabPanel, Tab } from "./index";
import { default as TabFramework } from "./Example";
import { storieTab } from "./index.css";

const meta = {
  title: "Components/Tabs",
  component: TabFramework,
};

export default meta;

export const Tabs = {
  render: () => {
    const [selected, onSelect] = useState("tab1");
    const options = ["tab1", "tab2", "tab3"];

    return (
      <TabProvider selected={selected} onSelect={onSelect} ariaLabel="example">
        <TabLabel label="category" />
        <TabList>
          {options.map((option) => (
            <Tab key={`tab-${option}`} value={option}>
              {({ selected, props }) => (
                <button
                  {...props}
                  style={{
                    outline: selected ? "2px solid black" : undefined,
                  }}
                >
                  tab
                </button>
              )}
            </Tab>
          ))}
        </TabList>

        {options.map((option) => {
          return (
            <TabPanel key={`tabpanel-${option}`} value={option}>
              {option}
            </TabPanel>
          );
        })}
      </TabProvider>
    );
  },
};

export const uncontorlled = {
  render: () => {
    const options = ["tab1", "tab2", "tab3"];
    return (
      <TabProvider>
        <TabLabel label="category" />
        <TabList>
          {options.map((option) => (
            <Tab
              key={`tab-${option}`}
              value={option}
              as={"button"}
              className={storieTab}
            />
          ))}
        </TabList>

        {options.map((option) => {
          return (
            <TabPanel key={`tabpanel-${option}`} value={option}>
              {option}
            </TabPanel>
          );
        })}
      </TabProvider>
    );
  },
};
