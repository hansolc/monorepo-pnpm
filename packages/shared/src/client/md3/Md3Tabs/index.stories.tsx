import { MdAccessAlarm } from "react-icons/md";
import Tabs from "./components/Tabs";
import { useState } from "react";

const meta = {
  title: "MaterialDesign3/Md3Tabs",
  component: Tabs,
};

export default meta;

export const BaseMd3Tabs = {
  render: () => {
    const options = [
      { label: "Tab1" },
      { label: "Tab2" },
      { label: "Tab3", icon: MdAccessAlarm },
    ];
    const [state, setState] = useState<number | undefined>();

    return (
      <Tabs options={options} onChange={setState} selectedIndex={state}>
        <div>content1</div>
        <div>content2</div>
        <div>content3</div>
      </Tabs>
    );
  },
};
