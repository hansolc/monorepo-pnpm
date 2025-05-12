import { ComponentProps } from "react";
import { StoriesButtonProps } from "./Button.css";
import { IconObj } from "../Icons/Icon";
interface ButtonProps extends ComponentProps<"button"> {
    size: StoriesButtonProps["size"];
    icon?: keyof typeof IconObj;
    ty?: StoriesButtonProps["ty"];
}
declare const Button: ({ size, children, icon, ty, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map