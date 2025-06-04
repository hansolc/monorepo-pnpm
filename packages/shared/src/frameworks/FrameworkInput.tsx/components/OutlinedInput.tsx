import { useRef, useState } from "react";
import { sprinkles } from "@styles/sprinkles.css";
import TextField from "@components/TextField/TextField";
import useFocus from "@hooks/useFocus";
import { fieldSet, input, label as labelStyle } from "./Label.css";
import { InputStateTypes } from "@components/TextField/types";
import { FrameworkInputProps } from "../types";

const OutlinedInput = ({
  label,
  clear,
  error,
  inputConfig,
  ...props
}: FrameworkInputProps) => {
  const { disabled, value, onChange } = props;
  const {
    fixedHeight,
    leadingIcon,
    prefix,
    suffix,
    supportingText,
    trailingIcon,
  } = inputConfig ?? {};
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const [inputState, setInputState] = useState<InputStateTypes>("blur");
  const focusEvents = useFocus({
    onFocusCallback: () => setInputState("focused"),
    onBlurCallback: () => setInputState("blur"),
  });
  // const hasValue = !!inputRef.current?.value;
  const refValue = inputRef.current?.value;

  return (
    <TextField
      value={value}
      onChange={onChange}
      state={inputState}
      error={error}
    >
      <TextField.Fieldset
        className={fieldSet({
          type: "outlined",
          fixedHeight: !!fixedHeight,
        })}
        disabled={disabled}
      >
        {leadingIcon && (
          <TextField.IconWrapper>{leadingIcon}</TextField.IconWrapper>
        )}
        {leadingIcon}
        <TextField.FloatingLabel
          className={labelStyle({
            floated: inputState === "focused" || !!refValue,
          })}
          tag="legend"
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
        {trailingIcon}
        {clear && <TextField.Clear as={clear} />}
      </TextField.Fieldset>
      <TextField.SupportingText className={sprinkles({ px: 16 })}>
        {supportingText}
      </TextField.SupportingText>
    </TextField>
  );
};

export default OutlinedInput;
