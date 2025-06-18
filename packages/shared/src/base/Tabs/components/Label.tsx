import { ElementType } from "react";
import { useTabsContext } from "../context/TabsContext";

interface Props {
  as?: ElementType;
  label: string;
  className?: string;
}

function TabLabel({ label, as: Component = "div", ...props }: Props) {
  const { ariaLabel } = useTabsContext();
  return (
    <Component id={`tablist-${ariaLabel}`} {...props}>
      {label}
    </Component>
  );
}

export default TabLabel;
