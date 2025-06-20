// withBackgroundImage.tsx
import { ComponentType, CSSProperties } from "react";
import clsx from "clsx";
import { backgroundRecipe, BackgroundStyleVariants } from "./index.css";

export interface WithBackgroundImageProps {
  bg?: {
    image: string;
    size?: BackgroundStyleVariants["size"];
    repeat?: BackgroundStyleVariants["repeat"];
    position?: BackgroundStyleVariants["position"];
  };
  className?: string;
}

export function withBackgroundImage<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return function ComponentWithBackgroundImage({
    bg,
    className,
    ...rest
  }: P & WithBackgroundImageProps) {
    const bgStyle: CSSProperties = bg?.image
      ? { backgroundImage: `url(${bg.image})` }
      : {};
    const bgClass = backgroundRecipe({
      size: bg?.size,
      repeat: bg?.repeat,
      position: bg?.position,
    });

    return (
      <WrappedComponent
        {...(rest as P)}
        className={clsx(bgClass, className)}
        style={bgStyle}
      />
    );
  };
}
