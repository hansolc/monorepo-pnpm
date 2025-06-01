import React from "react";
import useFocus from "../hooks/useFocus";
import TextField from "../TextField";
import { MdCancel } from "react-icons/md";
import {
  fieldSet,
  input,
  label as labelStyle,
} from "./InputWithFloatedLabel.css";
import { sprinkles } from "@styles/sprinkles.css";
import { TextFieldContextValue } from "../context/TextFieldContext";
import useIsTyping from "../hooks/useIsTyping";

interface Props extends Omit<TextFieldContextValue, "state"> {
  label: string;
  type: "number" | "text" | "email" | "password";
  outlined?: boolean;
  disabled?: boolean;
  prefix?: string;
  suffix?: string;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  supportingText?: string;
  fixedHeight?: number;
  clear?: boolean;
}

const InputWithFloatedLabel = ({
  leadingIcon,
  label,
  fixedHeight,
  prefix,
  suffix,
  clear,
  supportingText,
  outlined,
  trailingIcon,
  error,
  ...props
}: Props) => {
  const { disabled, value, onChange } = props;
  const { inputState, focusEvents } = useFocus({ disabled });
  const { isTyping } = useIsTyping({ value, state: inputState });
  //   const { isHovered, hoverEvents } = useHover({ inputState });
  return (
    <>
      <TextField
        value={value}
        onChange={onChange}
        state={inputState}
        disabled={disabled}
        error={error}
        className={fieldSet({
          type: outlined ? "outlined" : "filled",
          fixedHeight: !!fixedHeight,
        })}
        {...focusEvents}
      >
        {leadingIcon}
        {outlined && (
          <TextField.OutlinedLabel
            className={labelStyle({ floated: isTyping })}
          >
            {label}
          </TextField.OutlinedLabel>
        )}
        <div className={sprinkles({ flex: 1 })}>
          {!outlined && (
            <TextField.FloatingLabel
              className={labelStyle({ floated: isTyping })}
            >
              {label}
            </TextField.FloatingLabel>
          )}
          {fixedHeight ? (
            <TextField.TextAreaWithFix
              fixedHeight={fixedHeight}
              pfix={{ position: "prefix", text: prefix }}
              sfix={{ position: "suffix", text: suffix }}
              className={input}
              {...props}
            />
          ) : (
            <TextField.InputWithFix
              pfix={{ position: "prefix", text: prefix }}
              sfix={{ position: "suffix", text: suffix }}
              className={input}
              {...props}
            />
          )}
        </div>
        {trailingIcon}
        <TextField.Clear
          as={<MdCancel size="24" cursor={"pointer"} />}
          withClear={clear}
        />
      </TextField>
      {error ? (
        <TextField.SupportingText
          className={sprinkles({ color: "error", px: 16 })}
        >
          {error}
        </TextField.SupportingText>
      ) : (
        <TextField.SupportingText className={sprinkles({ px: 16 })}>
          {supportingText}
        </TextField.SupportingText>
      )}
    </>
  );
};

export default InputWithFloatedLabel;
