import React, { ComponentProps, PropsWithChildren } from "react";
import {
  Herobanner as Component,
  Typography,
} from "@monorepo-pnpm/shared/server";
import clsx from "clsx";

function HerobannerRoot({
  children,
  overlay,
  ...props
}: ComponentProps<typeof Component> & { overlay?: boolean }) {
  return (
    <Component {...props}>
      {children}
      {overlay && <Component.Overlay />}
    </Component>
  );
}

function Title({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Typography
      variants="display"
      size="lg"
      className={clsx(className, "z-10")}
      emphasize
    >
      {children}
    </Typography>
  );
}

const Herobanner = Object.assign(HerobannerRoot, { Title });

export default Herobanner;
