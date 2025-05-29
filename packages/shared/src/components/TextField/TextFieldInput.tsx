import React from "react";
import TextField from "./components/TextField/TextField";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
import useFocus from "./hooks/useFocus";
import useHover from "./hooks/useHover";
import { sprinkles } from "@styles/sprinkles.css";
import { inputAreaContainer } from "./components/TextField/TextField.css";
import { InputTagTypes } from "./types";

interface Props {
  type: InputTagTypes;
  value: string;
  setValue: (val: string) => void;
  label?: string;
  disabled?: boolean;
  leadingIcon?: React.ReactElement;
  supportingText?: string;
  outlined?: boolean;
  prefix?: string;
  suffix?: string;
  fixedHeight?: number;
  withClear?: boolean;
  error?: string;
}

const TextFieldInput = ({
  outlined,
  leadingIcon,
  supportingText,
  setValue,
  label = "label",
  prefix,
  suffix,
  fixedHeight,
  withClear = false,
  error,
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
        <div
          className={inputAreaContainer({
            outlined: !!outlined,
            inputState,
            hasValue: !!value,
          })}
        >
          <TextField.Label
            inputState={inputState}
            inputValue={value}
            outlined={outlined}
          >
            {label}
          </TextField.Label>
          <div className={sprinkles({ display: "flex", alignItems: "center" })}>
            <TextField.Fix
              position={prefix ? "prefix" : "suffix"}
              text={prefix}
              inputValue={value}
              inputState={inputState}
            />
            {fixedHeight ? (
              <TextField.Textarea
                {...focusEvents}
                {...inputProps}
                onChange={(e) => setValue(e.target.value)}
                fixedHeight={fixedHeight}
              />
            ) : (
              <TextField.Input
                {...focusEvents}
                {...inputProps}
                onChange={(e) => setValue(e.target.value)}
              />
            )}
            <TextField.Fix
              position={suffix ? "prefix" : "suffix"}
              text={suffix}
              inputValue={value}
              inputState={inputState}
            />
          </div>
        </div>
        <TextField.Clear
          as={<MdCancel size="24" cursor={"pointer"} />}
          clear={() => setValue("")}
          value={value}
          withClear={withClear}
        />
      </TextField>
      <TextField.SupportingText>{supportingText}</TextField.SupportingText>
    </>
  );
};

export default TextFieldInput;
