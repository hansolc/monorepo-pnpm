import React, { ElementType, ReactNode } from "react";
import { baseHeroBanner, HeroBannerStyleVariants } from "./index.css";
import clsx from "clsx";
import Overlay from "./components/Overlay";
import {
  withBackgroundImage,
  WithBackgroundImageProps,
} from "../hoc/withBackgroundImage";

interface HeroBannerProps {
  ariaLabel?: string;
  children: ReactNode;
  height?: HeroBannerStyleVariants["height"];
  className?: string;
}

function HeroBannerRoot({
  ariaLabel,
  children,
  height,
  className,
  ...rest
}: HeroBannerProps & WithBackgroundImageProps) {
  return (
    <section
      role="region"
      aria-label={ariaLabel}
      className={clsx(baseHeroBanner({ height }), className)}
      {...rest}
    >
      {children}
    </section>
  );
}

const HeroBanner = Object.assign(withBackgroundImage(HeroBannerRoot), {
  Overlay,
});

export default HeroBanner;
