import { ReactNode } from "react";
import Typography from "src/server/Typography";
import { Md3AppbarProps } from "../..";
import clsx from "clsx";
import { md3AppbarSubtitle, md3AppbarTitle } from "../../index.css";
import { headlineMap, subtitleMap } from "../../constant";

function AppbarTypography({
  children,
  size,
  type,
}: {
  children?: ReactNode;
  size: Md3AppbarProps["size"];
  type: "headline" | "subtitle";
}) {
  const typoProps = type === "headline" ? headlineMap : subtitleMap;
  if (type === "subtitle" && !children) return null;
  return (
    <Typography
      {...typoProps[size]}
      className={clsx(
        { [md3AppbarTitle]: type === "headline" },
        { [md3AppbarSubtitle]: type === "subtitle" }
      )}
    >
      {children}
    </Typography>
  );
}

export default AppbarTypography;
