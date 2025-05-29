type InputStateTypes = "focused" | "disabled" | "blur";
type InputTypes = "filled" | "outlined";
type InputTagTypes = "text" | "email" | "number" | "password";

interface TextFieldSharedProps {
  outlined?: boolean;
  inputState: InputStateTypes;
  isHovered?: boolean;
}

interface TextFieldFixProps {
  position: "prefix" | "suffix";
  text?: string;
}

export type {
  InputStateTypes,
  InputTypes,
  TextFieldSharedProps,
  InputTagTypes,
  TextFieldFixProps,
};
