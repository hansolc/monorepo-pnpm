type InputStateTypes = "focused" | "disabled" | "blur";
type InputTypes = "filled" | "outlined";

interface TextFieldSharedProps {
  outlined?: boolean;
  inputState: InputStateTypes;
  isHovered?: boolean;
}

export type { InputStateTypes, InputTypes, TextFieldSharedProps };
