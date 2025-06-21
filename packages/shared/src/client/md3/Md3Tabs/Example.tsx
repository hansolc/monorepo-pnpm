import { useState } from "react";
import Tabs from ".";
import { MdAccessAlarm } from "react-icons/md";

function Example() {
  const [selected, onSelect] = useState<number | undefined>();
  const options = [
    { label: "Tab1" },
    { label: "Tab2" },
    { label: "Tab3", icon: MdAccessAlarm },
  ];

  return (
    <Tabs options={options} selectedIndex={selected} onChange={onSelect} />
  );
}

export default Example;
