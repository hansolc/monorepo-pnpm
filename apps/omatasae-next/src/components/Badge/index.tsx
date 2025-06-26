import clsx from "clsx";
import React, { PropsWithChildren } from "react";

function Badge({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx("text-white rounded px-4 py-1", className)}>
      {children}
    </div>
  );
}

export default Badge;
