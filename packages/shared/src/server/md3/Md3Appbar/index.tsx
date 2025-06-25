import clsx from "clsx";
import { ReactNode } from "react";
import Icon from "./components/AppbarIcon";
import AppbarTypography from "./components/AppbarTypography";
import { AppbarSize } from "./types";
import { md3Appbar, md3AppbarTypoAlign } from "./index.css";
import { sprinkles } from "@styles/sprinkles.css";

export interface Md3AppbarProps {
  headline: string;
  size: AppbarSize;
  subtitle?: string;
  leadingIcon?: ReactNode[];
  trailingIcon?: ReactNode[];
  textAlign?: "start" | "center";
  className?: string;
}

function Md3Appbar({
  headline,
  subtitle,
  leadingIcon = [],
  trailingIcon = [],
  size,
  textAlign = "start",
  className,
}: Md3AppbarProps) {
  if (size === "sm") {
    return (
      <header className={clsx(md3Appbar({ size }), className)}>
        <Icon icons={leadingIcon} type="leading" />
        <div
          className={clsx(
            sprinkles({
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }),
            md3AppbarTypoAlign[textAlign]
          )}
        >
          <AppbarTypography size={size} type="headline">
            {headline}
          </AppbarTypography>
          <AppbarTypography size={size} type="subtitle">
            {subtitle}
          </AppbarTypography>
        </div>
        <Icon icons={trailingIcon} type="trailing" />
      </header>
    );
  } else {
    return (
      <header className={clsx(md3Appbar({ size }), className)}>
        <div
          className={sprinkles({
            display: "flex",
            justifyContent: "space-between",
          })}
        >
          <Icon icons={leadingIcon} type="leading" />
          <Icon icons={trailingIcon} type="trailing" />
        </div>
        <div
          className={clsx(
            sprinkles({
              display: "flex",
              flexDirection: "column",
              paddingBottom: 12,
            }),
            md3AppbarTypoAlign[textAlign]
          )}
        >
          <AppbarTypography size={size} type="headline">
            {headline}
          </AppbarTypography>
          <AppbarTypography size={size} type="subtitle">
            {subtitle}
          </AppbarTypography>
        </div>
      </header>
    );
  }
}

export default Md3Appbar;
