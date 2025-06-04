type InputStateTypes = "focused" | "disabled" | "blur";
type InputTagTypes = "text" | "email" | "number" | "password";
interface TextFieldFixProps {
  position: "prefix" | "suffix";
  text?: string;
}

interface InputProps {
  type: InputTagTypes;
  pfix?: TextFieldFixProps;
  sfix?: TextFieldFixProps;
  fixedHeight?: number;
  className?: string;
  name?: string;
}

interface FloatingLabelProps {
  children?: React.ReactNode;
  tag?: "label" | "legend";
  className?: string;
  // hasValue?: boolean;
}
export type {
  InputStateTypes,
  InputTagTypes,
  FloatingLabelProps,
  InputProps,
  TextFieldFixProps,
};
