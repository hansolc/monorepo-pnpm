import React from "react";
import { Typography } from "@monorepo-pnpm/shared/server";
import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Title({ children, className, ...props }: Props) {
  return (
    <Typography
      variants="title"
      size="lg"
      emphasize
      {...props}
      as="div"
      className={clsx("pb-5", className)}
    >
      {children}
    </Typography>
  );
}

export default Title;
