import React, { useRef, useState } from "react";
import { fieldSet, input, label as labelStyle } from "./Label.css";
import { sprinkles } from "@styles/sprinkles.css";
import useFocus from "@hooks/useFocus";
import { TextFieldContextValue } from "@components/TextField/context/TextFieldContext";
import TextField from "@components/TextField/TextField";
import { InputStateTypes, InputTagTypes } from "@components/TextField/types";
import { FrameworkInputProps } from "../types";

const FilledInput = ({
  label,
  clear,
  error,
  inputConfig,
  ...props
}: FrameworkInputProps) => {
  const { disabled, value, onChange } = props;
  const {
    prefix,
    suffix,
    leadingIcon,
    trailingIcon,
    supportingText,
    fixedHeight,
  } = inputConfig ?? {};
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const [inputState, setInputState] = useState<InputStateTypes>("blur");
  const focusEvents = useFocus({
    onFocusCallback: () => setInputState("focused"),
    onBlurCallback: () => setInputState("blur"),
  });
  const refValue = inputRef.current?.value;

  return (
    <TextField
      value={value ?? refValue}
      onChange={onChange}
      state={inputState}
      error={error}
    >
      <TextField.Fieldset
        className={fieldSet({
          type: "filled",
          fixedHeight: !!fixedHeight,
        })}
        disabled={disabled}
      >
        {!!leadingIcon && (
          <TextField.IconWrapper>{leadingIcon}</TextField.IconWrapper>
        )}
        <div className={sprinkles({ flex: 1 })}>
          <TextField.FloatingLabel
            className={labelStyle({
              floated: inputState === "focused" || !!refValue,
            })}
          >
            {label}
          </TextField.FloatingLabel>
          <TextField.InputWithFix
            ref={inputRef}
            pfix={{ position: "prefix", text: prefix }}
            sfix={{ position: "suffix", text: suffix }}
            className={input}
            fixedHeight={fixedHeight}
            {...props}
            {...focusEvents}
          />
        </div>
        {!!trailingIcon && (
          <TextField.IconWrapper>{trailingIcon}</TextField.IconWrapper>
        )}
        {clear && <TextField.Clear as={clear} refValue={refValue} />}
      </TextField.Fieldset>
      <TextField.SupportingText className={sprinkles({ px: 16 })}>
        {supportingText}
      </TextField.SupportingText>
    </TextField>
  );
};

export default FilledInput;
