import { ComponentProps } from "react";
import { buttonIcon, storiesButton, StoriesButtonProps } from "./Button.css";
import Icon, { IconObj } from "../Icons/Icon";

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
  ...props
}: ButtonProps) => {
  return (
    <button className={storiesButton({ size, ty })} {...props}>
      {icon && <Icon iconName={icon} className={buttonIcon[size]} />}
      {children}
    </button>
  );
};

export default Button;
