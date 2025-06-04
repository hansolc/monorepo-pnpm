import { ComponentProps } from "react";
import { buttonIcon, storiesButton, StoriesButtonProps } from "./Button.css";
import Icon, { IconObj } from "../Icons/Icon";
import clsx from "clsx";

export interface ButtonProps extends ComponentProps<"button"> {
  size: StoriesButtonProps["size"];
  icon?: keyof typeof IconObj;
  ty?: StoriesButtonProps["ty"];
}

const Button = ({
  size,
  children,
  icon,
  ty = "elevated",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={clsx(storiesButton({ size, ty }), className)} {...props}>
      {icon && <Icon iconName={icon} className={buttonIcon[size]} />}
      {children}
    </button>
  );
};

export default Button;
