import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { TabsContextValue } from "../types";

const TabsContext = createContext<TabsContextValue | null>(null);

export const TabProvider = ({
  selected: controlledValue,
  onSelect: setControlledValue,
  ariaLabel = "tab label",
  children,
}: PropsWithChildren<TabsContextValue>) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(controlledValue);
  const isControlled = controlledValue || false;
  const selected = isControlled ? controlledValue : uncontrolledValue;

  const onSelect = (val: string) => {
    if (!isControlled) setUncontrolledValue(val);
    setControlledValue?.(val);
  };

  const contextValue = useMemo(
    () => ({ selected, onSelect, ariaLabel }),
    [selected]
  );

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("useTabsContext must be used within Tabs Provider");
  }

  return ctx;
};
