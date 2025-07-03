import { forwardRefWithAs } from "src/utils/render";
import TabFn from "./components/Tab";
import TabGroupFn from "./components/TabGroup";
import TabListFn from "./components/TabList";
import {
  _internal_ComponentTab,
  _internal_ComponentTabGroup,
  _internal_ComponentTabList,
  _internal_ComponentTabPanel,
  _internal_ComponentTabPanels,
} from "./types";
import TabPanelsFn from "./components/TabPanels";
import TabPanelFn from "./components/TabPanel";

export const Tab = forwardRefWithAs(TabFn, "Tab") as _internal_ComponentTab;
export const TabGroup = forwardRefWithAs(
  TabGroupFn,
  "TabGroup"
) as _internal_ComponentTabGroup;
export const TabList = forwardRefWithAs(
  TabListFn,
  "TabList"
) as _internal_ComponentTabList;
export const TabPanels = forwardRefWithAs(
  TabPanelsFn,
  "TabPanels"
) as _internal_ComponentTabPanels;
export const TabPanel = forwardRefWithAs(
  TabPanelFn,
  "TabPanel"
) as _internal_ComponentTabPanel;
