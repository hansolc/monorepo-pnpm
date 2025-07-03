import { forwardRefWithAs } from "src/utils/render";
import ButtonFn from "./comonents/Button";
import { _internal_ComponentButton } from "./types";

export const Button = forwardRefWithAs(
  ButtonFn,
  "Button"
) as _internal_ComponentButton;
