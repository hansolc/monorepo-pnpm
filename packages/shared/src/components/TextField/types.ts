type InputStateTypes = "focused" | "disabled" | "blur";
type InputTypes = "filled" | "outlined";
type InputTagTypes = "text" | "email" | "number" | "password";

interface TextFieldSharedProps {
  outlined?: boolean;
  inputState: InputStateTypes;
  isHovered?: boolean;
}

export type {
  InputStateTypes,
  InputTypes,
  TextFieldSharedProps,
  InputTagTypes,
};
