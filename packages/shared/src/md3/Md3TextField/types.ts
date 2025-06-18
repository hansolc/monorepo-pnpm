import { TextFieldContextValue } from "src/base/TextField/context/TextFieldContext";
import { InputTagTypes } from "src/base/TextField/types";

interface FrameworkInputProps extends Omit<TextFieldContextValue, "state"> {
  label: string;
  type: InputTagTypes;
  disabled?: boolean;
  clear?: React.ReactElement;
  outlined?: boolean;
  name?: string;
  className?: string;
  inputConfig?: {
    prefix?: string;
    suffix?: string;
    leadingIcon?: React.ReactElement;
    trailingIcon?: React.ReactElement;
    supportingText?: string;
    fixedHeight?: number;
  };
}

export type { FrameworkInputProps };
