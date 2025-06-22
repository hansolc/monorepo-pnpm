import React from "react";
import { Typography } from "@monorepo-pnpm/shared/server";

interface Props {
  subtitle?: {
    text: string;
    color?: string;
  };
  children?: React.ReactNode;
  className?: string;
}

function Title({ subtitle, children, ...props }: Props) {
  return (
    <div className="flex flex-col pb-2">
      {subtitle && (
        <Typography variants="body" size="lg" className={subtitle.color}>
          {subtitle.text}
        </Typography>
      )}
      <Typography variants="display" size="lg" emphasize {...props}>
        {children}
      </Typography>
    </div>
  );
}

export default Title;
