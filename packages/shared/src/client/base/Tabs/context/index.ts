import { createContext, MutableRefObject, useContext } from "react";

export interface TabsDataContext {
  selectedIndex: number;
  tabs: MutableRefObject<HTMLElement | null>[];
  panels: MutableRefObject<HTMLElement | null>[];
}

export interface TabsActionContext {
  registerTab: (tab: MutableRefObject<HTMLElement | null>) => void;
  registerPanel: (panel: MutableRefObject<HTMLElement | null>) => void;
  change: (index: number) => void;
}

export const TabsDataContext = createContext<TabsDataContext | null>(null);
export const TabsActionContext = createContext<TabsActionContext | null>(null);

export function useAction(component: string) {
  const ctx = useContext(TabsActionContext);
  if (!ctx) {
    throw new Error(`${component} is missing a parent <TabGroup/> component`);
  }
  return ctx;
}

export function useData(component: string) {
  const ctx = useContext(TabsDataContext);
  if (!ctx) {
    throw new Error(`${component} is missing a parent <TabGroup/> component`);
  }
  return ctx;
}
