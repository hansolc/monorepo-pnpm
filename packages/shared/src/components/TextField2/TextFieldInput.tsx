import React from "react";
import TextField from "./components/TextField/TextField";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
import Typography from "../Typography/Typography";
import useFocus from "./hooks/useFocus";
import useHover from "./hooks/useHover";
import { sprinkles } from "@styles/sprinkles.css";

interface Props {
  type: "text" | "email" | "password";
  value: string;
  setValue: (val: string) => void;
  label?: string;
  disabled?: boolean;
  leadingIcon?: React.ReactElement;
  supportingText?: string;
  outlined?: boolean;
}

const TextFieldInput = ({
  outlined,
  leadingIcon,
  supportingText,
  setValue,
  label = "label",
  ...inputProps
}: Props) => {
  const { disabled, value } = inputProps;
  const { inputState, focusEvents } = useFocus({ disabled });
  const { isHovered, hoverEvents } = useHover({ inputState });
  return (
    <>
      <TextField
        outlined={outlined}
        inputState={inputState}
        isHovered={isHovered}
        {...hoverEvents}
      >
        {leadingIcon}
        <div className={sprinkles({ position: "relative", flex: 1 })}>
          <TextField.Label
            inputState={inputState}
            inputValue={value}
            outlined={outlined}
          >
            {label}
          </TextField.Label>
          <TextField.Input
            {...focusEvents}
            {...inputProps}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {value && (
          <TextField.Clear
            as={<MdCancel size="24" cursor={"pointer"} />}
            clear={() => setValue("")}
          />
        )}
      </TextField>
      <TextField.SupportingText>{supportingText}</TextField.SupportingText>
    </>
  );
};

export default TextFieldInput;
