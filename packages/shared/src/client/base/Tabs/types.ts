import { ElementType, MutableRefObject } from "react";
import { RefFor } from "src/types";
import { TabProps } from "./components/Tab";
import { TabGroupProps } from "./components/TabGroup";
import { TabListProps } from "./components/TabList";
import { TabPanelsProps } from "./components/TabPanels";
import { TabPanelProps } from "./components/TabPanel";

export enum TabActionTypes {
  SetSelectedIndex,

  RegisterTab,
  UnregisterTab,

  RegisterPanel,
  UnregisterPanel,
}

export type TabActions =
  | { type: TabActionTypes.SetSelectedIndex; index: number }
  | {
      type: TabActionTypes.RegisterTab;
      tab: MutableRefObject<HTMLElement | null>;
    }
  | {
      type: TabActionTypes.UnregisterTab;
      tab: MutableRefObject<HTMLElement | null>;
    }
  | {
      type: TabActionTypes.RegisterPanel;
      panel: MutableRefObject<HTMLElement | null>;
    }
  | {
      type: TabActionTypes.UnregisterPanel;
      panel: MutableRefObject<HTMLElement | null>;
    };

export interface StateDefinition {
  selectedIndex: number;
  tabs: MutableRefObject<HTMLElement | null>[];
  panels: MutableRefObject<HTMLElement | null>[];
}

export interface _internal_ComponentTab {
  <TTag extends ElementType = "button">(
    props: TabProps<TTag> & RefFor<TTag>
  ): React.JSX.Element;
}

export interface _internal_ComponentTabGroup {
  <TTag extends ElementType = "div">(
    props: TabGroupProps<TTag> & RefFor<TTag>
  ): React.JSX.Element;
}

export interface _internal_ComponentTabList {
  <TTag extends ElementType = "div">(
    props: TabListProps<TTag> & RefFor<TTag>
  ): React.JSX.Element;
}

export interface _internal_ComponentTabPanels {
  <TTag extends ElementType = "div">(
    props: TabPanelsProps<TTag> & RefFor<TTag>
  ): React.JSX.Element;
}

export interface _internal_ComponentTabPanel {
  <TTag extends ElementType = "div">(
    props: TabPanelProps<TTag> & RefFor<TTag>
  ): React.JSX.Element;
}
