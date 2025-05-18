import React, { ComponentProps, useState } from "react";
import Typography from "../Typography/Typography";
import {
  textField,
  textFieldInput,
  textFieldInputArea,
  textFieldLabel,
  textFieldLabelInputArea,
  TextFieldSupportingText,
} from "./TextField.css";

type TextFieldType = "email" | "password" | "text";

export interface TextFieldProps extends Omit<ComponentProps<"input">, "type"> {
  label: string;
  type: TextFieldType;
  error?: string;
  supportingText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
}

const TextField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  supportingText,
  leadingIcon,
  trailingIcon,
  disabled,
  className,
  ...rest
}: TextFieldProps) => {
  // isFloat 버그 개선을 위해 추가
  // useTextField 추가로 매번 input 입력마다 re-rendering하지 않고 onFoucsed 에서 onBlur 시에만 value 값이 있는지 판단하기 위해
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isFloat = Boolean(inputValue?.toString().length) || isFocused;
  const activeState = disabled ? "disabled" : isFocused ? "focus" : "enable";
  const hasError = Boolean(error) && !disabled;

  const helperText = error ?? supportingText ?? "";

  return (
    <div className={textField()}>
      <div className={textFieldInputArea({ activeState, hasError })}>
        {leadingIcon && <span>{leadingIcon}</span>}

        <div className={textFieldLabelInputArea({ isFloat })}>
          <label
            htmlFor={name}
            className={textFieldLabel({
              activeState,
              hasError,
              isFloat,
            })}
          >
            {label}
          </label>

          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`${textFieldInput({
              activeState,
              hasError,
            })} ${className}`}
            onFocus={() => !disabled && setIsFocused(true)}
            onBlur={(e) => {
              if (!disabled) {
                setIsFocused(false);
                setInputValue(e.target.value);
              }
            }}
            {...rest}
          />
        </div>

        {trailingIcon && <span>{trailingIcon}</span>}
      </div>

      {helperText && (
        <Typography
          className={TextFieldSupportingText({
            activeState,
            hasError,
          })}
          ty="label"
          size="sm"
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default TextField;
