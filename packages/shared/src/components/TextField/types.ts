type InputStateTypes = "focused" | "disabled" | "blur";
type InputTagTypes = "text" | "email" | "number" | "password";

interface InputProps {
  type: InputTagTypes;
  value?: string;
  onChange?: (value: string) => void;
  pfix?: TextFieldFixProps;
  sfix?: TextFieldFixProps;
  fixedHeight?: number;
  className?: string;
}

interface TextFieldFixProps {
  position: "prefix" | "suffix";
  text?: string;
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
  TextFieldFixProps,
  FloatingLabelProps,
  InputProps,
};
