import {
  createElement,
  ElementType,
  MutableRefObject,
  useMemo,
  useReducer,
} from "react";
import { PropsWithAs, RefFor } from "src/types";
import { StateDefinition, TabActions, TabActionTypes } from "../types";
import useEvent from "@hooks/useEvent";
import { TabsActionContext, TabsDataContext } from "../context";
import clsx from "clsx";

export type TabGroupProps<TTag extends ElementType = "div"> = PropsWithAs<
  TTag,
  {
    onChange?: (index: number) => void;
    selectedIndex?: number;
    defaultIndex?: number;
  }
>;

function reducer(state: StateDefinition, action: TabActions) {
  switch (action.type) {
    case TabActionTypes.RegisterTab:
      return {
        ...state,
        tabs: [...state.tabs, action.tab],
      };
    case TabActionTypes.RegisterPanel:
      return {
        ...state,
        panels: [...state.panels, action.panel],
      };
    case TabActionTypes.SetSelectedIndex:
      return {
        ...state,
        selectedIndex: action.index,
      };
    case TabActionTypes.UnregisterTab:
      return {
        ...state,
        tabs: state.tabs.filter((t) => t !== action.tab),
      };
    case TabActionTypes.UnregisterPanel:
      return {
        ...state,
        panels: state.panels.filter((p) => p !== action.panel),
      };
    default:
      return state;
  }
}

export default function TabGroupFn<TTag extends ElementType = "div">(
  props: TabGroupProps<TTag>,
  ref: RefFor<TTag>
) {
  let {
    children,
    className,
    defaultIndex = 0,
    selectedIndex = null,
    as,
    onChange,
  } = props;
  const Component = as || "div";
  const isControlled = selectedIndex !== null;

  const [state, dispatch] = useReducer(reducer, {
    selectedIndex: selectedIndex ?? defaultIndex,
    tabs: [],
    panels: [],
  });

  const registerTab = useEvent((tab: MutableRefObject<HTMLElement | null>) => {
    dispatch({ type: TabActionTypes.RegisterTab, tab });
    return () => dispatch({ type: TabActionTypes.UnregisterTab, tab });
  });

  const registerPanel = useEvent(
    (panel: MutableRefObject<HTMLElement | null>) => {
      dispatch({ type: TabActionTypes.RegisterPanel, panel });
      return () => dispatch({ type: TabActionTypes.UnregisterPanel, panel });
    }
  );

  const change = useEvent((index: number) => {
    if (!isControlled) {
      dispatch({ type: TabActionTypes.SetSelectedIndex, index });
    }
    onChange?.(index);
  });

  const tabActions = useMemo(
    () => ({ registerTab, registerPanel, change }),
    [dispatch]
  );

  const tabDatas = useMemo(
    () => ({
      ...state,
      selectedIndex: isControlled ? selectedIndex : state.selectedIndex,
    }),
    [state, selectedIndex, isControlled]
  );

  const content = (
    <TabsActionContext.Provider value={tabActions}>
      <TabsDataContext.Provider value={tabDatas}>
        {children}
      </TabsDataContext.Provider>
    </TabsActionContext.Provider>
  );

  return createElement(Component, { className: clsx(className), ref }, content);
}
