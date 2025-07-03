import React, {
  createElement,
  ElementType,
  Ref,
  useEffect,
  useId,
  useRef,
} from "react";
import { PropsWithAs } from "src/types";
import { useAction, useData } from "../context";
import { mergeRefs, renderWithComponent } from "src/utils/render";

const hiddenStyle = {
  position: "fixed",
  top: -9999,
  left: -9999,
  width: 1,
  height: 1,
  overflow: "hidden",
  whiteSpace: "nowrap",
  pointerEvents: "none",
} as const;

export type TabPanelProps<TTag extends ElementType = "div"> = PropsWithAs<
  TTag,
  {}
>;

function TabPanelFn<TTag extends ElementType = "div">(
  props: TabPanelProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const localId = useId();
  const { as, id = `base-tabs-panel-${localId}`, children, ...rest } = props;
  const { selectedIndex, panels, tabs } = useData("TabPanel");
  const actions = useAction("TabPanel");
  const localRef = useRef<HTMLElement | null>(null);
  const panelRef = mergeRefs(localRef, ref);
  const myIndex = panels.indexOf(localRef);
  const selected = myIndex === selectedIndex;

  useEffect(() => {
    if (localRef.current) {
      return actions.registerPanel(localRef);
    }
  }, [actions, localRef]);

  const tabpanelProps = {
    id,
    role: "tabpanel",
    "aria-labelledby": tabs[myIndex]?.current?.id,
    tabIndex: selected ? 0 : -1,
    "aria-hidden": !selected,
    style: !selected ? hiddenStyle : undefined,
    ...rest,
  };

  return renderWithComponent({
    as: as ?? "div",
    children,
    ref: panelRef,
    props: tabpanelProps,
  });
}

export default TabPanelFn;
