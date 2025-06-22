import React from "react";
import { Typography } from "@monorepo-pnpm/shared/server";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Title({ children, ...props }: Props) {
  return (
    <Typography variants="title" size="lg" emphasize {...props}>
      {children}
    </Typography>
  );
}

export default Title;
