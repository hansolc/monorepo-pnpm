import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { TabsContextValue } from "../types";

const TabsContext = createContext<TabsContextValue | null>(null);

export function TabProvider({
  selected: controlledValue,
  onSelect: setControlledValue,
  ariaLabel = "tab label",
  defaultSelected,
  children,
}: PropsWithChildren<Omit<TabsContextValue, "registerTab" | "tabRefs">>) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultSelected);
  const isControlled = controlledValue || false;
  const selected = isControlled ? controlledValue : uncontrolledValue;
  const tabRefs = useRef<Array<HTMLElement | null>>([]);

  // for keyboard events
  const registerTab = (ref: HTMLElement | null) => {
    if (ref && !tabRefs.current.includes(ref)) {
      tabRefs.current.push(ref);
    }
  };

  const onSelect = (val: string) => {
    if (!isControlled) setUncontrolledValue(val);
    setControlledValue?.(val);
  };

  const contextValue = useMemo(
    () => ({
      selected,
      onSelect,
      ariaLabel,
      registerTab,
      tabRefs,
      defaultSelected,
    }),
    [selected]
  );

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
}

export function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("useTabsContext must be used within Tabs Provider");
  }

  return ctx;
}
