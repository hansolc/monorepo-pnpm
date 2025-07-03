import { ElementType, Ref } from "react";
import { PropsWithAs, RefFor } from "src/types";
import { renderWithComponent } from "src/utils/render";

export type TabListProps<TTag extends ElementType = "div"> = PropsWithAs<
  TTag,
  {}
>;

// TODO: aria-labelledby - label ID
// TODO: aria-orientation - horizontal, vertical
function TabListFn<TTag extends ElementType = "div">(
  props: TabListProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const { as, children, ...rest } = props;
  let tablistProps = {
    role: "tablist",
    ...rest,
  };

  return renderWithComponent({
    as: as ?? "div",
    children,
    ref,
    props: tablistProps,
  });
}

export default TabListFn;
