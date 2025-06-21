import clsx from "clsx";
import { ReactElement, ReactNode, isValidElement, cloneElement } from "react";
import { md3AppbarLeadingIcon, md3AppbarTrailingIcon } from "../../index.css";

function Icon({
  icons,
  className,
  type,
}: {
  icons: ReactNode[];
  className?: string;
  type: "leading" | "trailing";
}) {
  if (!icons || icons.length === 0) return null;

  const iconStyle =
    type === "leading" ? md3AppbarLeadingIcon : md3AppbarTrailingIcon;

  return (
    <div className={className}>
      {icons.map((icon, i) => {
        if (isValidElement(icon)) {
          return cloneElement(icon as ReactElement, {
            key: i,
            className: clsx(icon.props.className, iconStyle),
          });
        }
        return null;
      })}
    </div>
  );
}

export default Icon;
