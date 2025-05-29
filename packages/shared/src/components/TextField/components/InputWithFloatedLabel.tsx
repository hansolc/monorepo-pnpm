import React from "react";
import useFocus from "../hooks/useFocus";
import TextField from "../TextField";
import { MdCancel } from "react-icons/md";
import { fieldSet, input } from "./InputWithFloatedLabel.css";
import { sprinkles } from "@styles/sprinkles.css";

interface Props {
  label: string;
  type: "number" | "text" | "email" | "password";
  value: string;
  onChange: any;
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
  ...props
}: Props) => {
  const { disabled, onChange, value } = props;
  const { inputState, focusEvents } = useFocus({ disabled });
  //   const { isHovered, hoverEvents } = useHover({ inputState });
  return (
    <>
      <TextField
        value={value}
        onChange={onChange}
        state={inputState}
        disabled={disabled}
        className={fieldSet({
          type: outlined ? "outlined" : "filled",
        })}
        {...focusEvents}
      >
        {leadingIcon}
        {outlined && <TextField.OutlinedLabel>{label}</TextField.OutlinedLabel>}
        <div className={sprinkles({ flex: 1 })}>
          {!outlined && (
            <TextField.FloatingLabel className={label}>
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
      <TextField.SupportingText>{supportingText}</TextField.SupportingText>
    </>
  );
};

export default InputWithFloatedLabel;
