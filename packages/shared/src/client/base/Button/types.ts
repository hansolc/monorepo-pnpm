import { ElementType } from "react";
import { ButtonProps } from "./comonents/Button";
import { RefFor } from "src/types";

export interface _internal_ComponentButton {
  <TTag extends ElementType = "button">(
    props: ButtonProps<TTag> & RefFor<TTag>
  ): React.JSX.Element;
}
