import { Button } from "@headlessui/react";
import clsx from "clsx";
import { md3Button, md3ButtonIconSize, Md3ButtonStyleProps } from "./index.css";
import Typography from "@md3/Typography";
import { IconType } from "@react-icons/all-files/lib";
import { buttonTypoSize } from "./types";
import { ComponentPropsWithoutRef } from "react";

interface Md3ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variants: Md3ButtonStyleProps["variants"];
  children?: React.ReactNode;
  size?: keyof typeof buttonTypoSize;
  shape?: Md3ButtonStyleProps["shape"];
  icon?: IconType;
  className?: string;
}

const Md3Button = ({
  children,
  variants,
  size = "sm",
  shape,
  icon: Icon,
  className,
  ...props
}: Md3ButtonProps) => {
  return (
    <Button
      className={clsx(md3Button({ variants, size, shape }), className)}
      {...props}
    >
      {Icon && <Icon className={md3ButtonIconSize[size]} />}
      <Typography {...buttonTypoSize[size]}>{children}</Typography>
    </Button>
  );
};

export default Md3Button;
