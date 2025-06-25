import React, { ComponentProps } from "react";
import { Appbar as Component } from "@monorepo-pnpm/shared/server";
import clsx from "clsx";

function Appbar({ className, ...props }: ComponentProps<typeof Component>) {
  return <Component {...props} className={clsx(className, "px-4!")} />;
}

export default Appbar;
