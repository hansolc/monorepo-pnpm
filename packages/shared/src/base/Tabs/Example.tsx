import { TabsContextValue } from "./types";
import { TabProvider } from "./context/TabsContext";
import TabLabel from "./components/Label";
import TabList from "./components/TabList";
import Tab from "./components/Tab";

interface Props extends TabsContextValue {
  options: string[];
}

const Tabs = ({ options, selected, onSelect }: Props) => {
  return (
    <TabProvider selected={selected} onSelect={onSelect} ariaLabel="example">
      <TabLabel label="category" />
      <TabList>
        {options.map((option) => (
          <Tab value={option} as={"button"} />
        ))}
      </TabList>
    </TabProvider>
  );
};

export default Tabs;
