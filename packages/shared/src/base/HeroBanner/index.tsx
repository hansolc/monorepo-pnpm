import React, { ElementType, ReactNode } from "react";
import { baseHeroBanner } from "./index.css";
import clsx from "clsx";
import Overlay from "./components/Overlay";

interface HeroBannerProps {
  as?: ElementType;
  bg?: string;
  ariaLabel?: string;
  children: ReactNode;
  height?: "full" | "auto";
  className?: string;
}

function HeroBannerRoot({
  as: Component = "section",
  bg,
  ariaLabel,
  height = "full",
  children,
  className,
}: HeroBannerProps) {
  return (
    <Component
      className={clsx(baseHeroBanner({ height }), className)}
      style={{ backgroundImage: `url(${bg})` }}
      role="region"
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
}

const HeroBanner = Object.assign(HeroBannerRoot, {
  Overlay,
});

export default HeroBanner;
