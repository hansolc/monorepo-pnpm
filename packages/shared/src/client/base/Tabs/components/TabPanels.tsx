import { ElementType, Ref } from "react";
import { PropsWithAs, RefFor } from "src/types";
import { renderWithComponent } from "src/utils/render";

export type TabPanelsProps<TTag extends ElementType = "div"> = PropsWithAs<
  TTag,
  {}
>;

// TODO: aria-labelledby - label ID
// TODO: aria-orientation - horizontal, vertical
function TabPanelsFn<TTag extends ElementType = "div">(
  props: TabPanelsProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const { as, children, ...rest } = props;
  let tabpanelsProps = {
    ...rest,
  };

  return renderWithComponent({
    as: as ?? "div",
    children,
    ref,
    props: tabpanelsProps,
  });
}

export default TabPanelsFn;
